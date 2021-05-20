import React, { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../config/firebase';
interface IAuthRouteProps {
    children: ReactNode;
    // any other props that come into the component
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;

    // auth,currentuser provides the firebase.User object if authenticated. 
    if (!auth.currentUser) {
        return <Redirect to="/auth/signup" />;
    }
    return (
        <div>{children}</div>
    );
}

export default AuthRoute;