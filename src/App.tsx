import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            console.log(route);
            if (!route.protected)
              return <Route
                key={index}
                path={route.path}
                element={
                  <route.element name={route.name} />}
                />
            else
              return <Route
                key={index}
                path={route.path}
                element={
                  <AuthRoute>
                    <route.element name={route.name} />
                  </AuthRoute>}
                />
            }
          )}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
