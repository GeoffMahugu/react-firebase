import IRoute from "../interfaces/route.interface";
import SignUpPage from "../pages/auth/SignUpPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: false
    },
    {
        path: '/cart',
        exact: true,
        component: CartPage,
        name: 'Cart Page',
        protected: true
    },
    {
        path: '/auth/signup',
        exact: true,
        component: SignUpPage,
        name: 'Login Page',
        protected: false
    },

];
export default routes;
