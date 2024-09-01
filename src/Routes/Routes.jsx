import { createBrowserRouter } from "react-router-dom";
import Root from "../LaOut/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../LaOut/ErrorElement/ErrorElement";
import Menu from "../Pages/Menu/Menu";
import Order from "../Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import DashBoard from "../Components/DashBoard/DashBoard";
import Cart from "../Components/DashBoard/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <PrivateRoute><Menu></Menu></PrivateRoute>,
            },
            {
                path: "/order",
                element: <PrivateRoute><Order></Order></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },



    // dashboard LaOut

    {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            }
        ]
    }


]);

export default router;