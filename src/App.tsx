import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom';
import { auth } from './config/firebase';
import routes from './config/routes';
import AuthRoute from './modules/auth/AuthRouter';
import './App.css';

export interface IApplicationProps { }

const App: React.FunctionComponent<IApplicationProps> = props => {
  const [loading, setLoading] = useState<boolean>(true);

  // Monitor and Update user state.
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('User detected.')
      } else {
        console.log('No user detected');
      }
      setLoading(false);
    })
  }, []);
  if (loading)
    return <div>Loding...</div>

  return (
    <Router>
      <Switch>
        {routes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(routeProps: RouteComponentProps<any>) => {
              if (route.protected)
                return <AuthRoute ><route.component {...routeProps} /></AuthRoute>;

              return <route.component  {...routeProps} />;
            }}
          />)}
      </Switch>
    </Router>
  );
}

export default App;
