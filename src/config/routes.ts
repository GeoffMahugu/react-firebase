import IRoute from "../interfaces/route.interface";
import SignUpPage from "../pages/auth/SignUpPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";

const routes: IRoute[] = [
    {
        path: '/',
        element: HomePage,
        name: 'Home Page',
        protected: false
    },
    {
        path: '/cart',
        element: CartPage,
        name: 'Cart Page',
        protected: true
    },
    {
        path: '/auth/signup',
        element: SignUpPage,
        name: 'Login Page',
        protected: false
    },

];
export default routes;
