import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Error/ErrorPage";
import Registration from "../Authentication/Registration";
import Login from "../Authentication/Login";
import Gallery from "../Pages/Gellary/Gallery";
import Classes from "../Pages/Classes/Classes";
import ClassesDetails from "../Pages/Classes/ClassesDetails";

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
                },
                {
                    path: '/gallery',
                    element: <Gallery/>
                },
                {
                    path: '/classes',
                    element: <Classes/>
                },
                {
                    path: '/classes-details/:id',
                    element: <ClassesDetails/>,
                    loader: ({params})=> fetch(`http://localhost:5600/classes/${params.id}`)
                }
            ]
        }
])

 
export default Routers;