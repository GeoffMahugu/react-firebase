import IPageProps from './page.interface';

export default interface IRoute {
    path: string;
    element: React.FunctionComponent<IPageProps>;
    name: string; // Used to update page infon and title. 
    protected: boolean; // This will defines if the route is proteted or not
}