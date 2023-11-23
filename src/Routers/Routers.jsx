import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Error/ErrorPage";

const Routers = createBrowserRouter([
        {
            path: '/',
            element: <Main/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                }
            ]
        }
])

 
export default Routers;