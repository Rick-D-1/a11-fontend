import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoardLayout from "../DashBoard Layout/DashBoardLayout";
import Maindashboard from "../Pages/DashBoard/MainDashboard/Maindashboard";
import Addproduct from "../Pages/DashBoard/AddProduct/Addproduct";
import ManageProduct from "../Pages/ManageProduct/ManageProduct";
import Addrequest from "../Pages/DashBoard/AddRequest/Addrequest";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import MyRequest from "../Pages/DashBoard/MyRequest/MyRequest";
import Donate from "../Pages/Donate/Donate";

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
            ,
            {
                path: '/donate',
                Component: Donate,
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashBoardLayout></DashBoardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Maindashboard></Maindashboard>
            },
            {
                path: 'add-request',
                element: <Addrequest></Addrequest>
            },
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'my-request',
                element: <MyRequest></MyRequest>
            },

        ]
    }
]);

export default router;
