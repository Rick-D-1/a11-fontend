import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                Component: Login,
            }
            ,
            {
                path: '/signup',
                Component: Register,
            }
        ]
    },
]);

export default router;
