import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Error/ErrorPage";
import Registration from "../Authentication/Registration";
import Login from "../Authentication/Login";

const Routers = createBrowserRouter([
        {
            path: '/',
            element: <Main/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/registration',
                    element: <Registration/>
                },
                {
                    path: '/login',
                    element: <Login/>
                }
            ]
        }
])

 
export default Routers;