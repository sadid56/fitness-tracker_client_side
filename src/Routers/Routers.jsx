import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Error/ErrorPage";
import Registration from "../Authentication/Registration";
import Login from "../Authentication/Login";
import Gallery from "../Pages/Gellary/Gallery";
import Classes from "../Pages/Classes/Classes";
import ClassesDetails from "../Pages/Classes/ClassesDetails";
import Community from "../Pages/Community/Community";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import PrivateRoute from "../Private/PrivateRoute";
import RecommendedClass from "../Pages/Dashboard/RecommendedClass/RecommendedClass";

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
        },
        {
            path: '/community',
            element: <Community/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>,
            children: [
                // member related
                {
                    path: '/dashboard/profile',
                    element:<PrivateRoute><Profile/></PrivateRoute>
                },
                {
                    path: '/dashboard/recommended-class',
                    element: <PrivateRoute><RecommendedClass/></PrivateRoute>
                }

            ]
        }
])

 
export default Routers;