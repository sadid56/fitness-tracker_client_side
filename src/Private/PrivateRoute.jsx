/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loader from "../Shared/Loader/Loader";

const PrivateRoute = ({children}) => {
    const {user, loading}= useAuth()
    if(loading){
        return <Loader/>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'/>
}
 
export default PrivateRoute;