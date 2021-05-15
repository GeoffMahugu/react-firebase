import React from 'react';
import IPageProps from '../interfaces/page.interface';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <div>
            Home Page - Unprotected
        </div>
    );
}

export default HomePage;