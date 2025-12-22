import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoardLayout from "../DashBoard Layout/DashBoardLayout";
import Maindashboard from "../Pages/DashBoard/MainDashboard/Maindashboard";
import Addproduct from "../Pages/DashBoard/AddProduct/Addproduct";
import ManageProduct from "../Pages/ManageProduct/ManageProduct";

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
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: 'main',
                element: <Maindashboard></Maindashboard>
            },
            {
                path: 'add-product',
                element: <Addproduct></Addproduct>
            },
            {
                path: 'manage-product',
                element: <ManageProduct></ManageProduct>
            },
        ]
    }
]);

export default router;
