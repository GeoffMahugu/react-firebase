import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import IPageProps from '../interfaces/page.interface';

const CartPage: React.FunctionComponent<IPageProps> = props => {
    // Logs the current user
    console.log(auth.currentUser)
    return (
        <div>
            <h1> Cart Page - Protected</h1>
            <Link to={`/`}>
                <button>Back Home</button>
            </Link>
        </div>
    );
}

export default CartPage;
