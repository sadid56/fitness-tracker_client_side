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
import ManageMembers from "../Pages/Dashboard/ManageMembers/ManageMembers";
import AddForum from "../Pages/Dashboard/AddForum/AddForum";
import AddClasses from "../Pages/Dashboard/AddClasses/AddClasses";
import AllSubscriber from "../Pages/Dashboard/AllSubscriber/AllSubscriber";
import AllTrainers from "../Pages/Dashboard/AllTrainers/AllTrainers";
import PaymentPage from "../Pages/Dashboard/PaymentPage/PaymentPage";

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
            element: <PrivateRoute><Dashboard/></PrivateRoute>,
            children: [
                // member related
                {
                    path: '/dashboard/profile',
                    element:<Profile/>
                },
                {
                    path: '/dashboard/recommended-class',
                    element: <RecommendedClass/>
                },
                // trainer related
                {
                    path: '/dashboard/manage-members',
                    element: <ManageMembers/>
                },
                {
                    path:'/dashboard/add-forum',
                    element: <AddForum/>
                },
                {
                    path: '/dashboard/add-classes',
                    element: <AddClasses/>
                },
                // admin related
                {
                    path: '/dashboard/all-subscriber',
                    element: <AllSubscriber/>
                },
                {
                    path: '/dashboard/all-trainers',
                    element: <AllTrainers/>
                },
                {
                    path: '/dashboard/payment-page/:id',
                    element: <PaymentPage/>,
                    loader: ({params})=> fetch(`http://localhost:5600/trainers/${params.id}`)
                }

            ]
        }
])

 
export default Routers;