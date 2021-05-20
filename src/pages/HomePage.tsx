import React from 'react';
import { Link } from 'react-router-dom';
import IPageProps from '../interfaces/page.interface';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <div>
            <h1> Home Page - Unprotected</h1>
            <Link to={`/cart`}>
                <button>View Cart</button>
            </Link>
            <Link to={`/auth/signup`}>
                <button>SignUp</button>
            </Link>
        </div>
    );
}

export default HomePage;