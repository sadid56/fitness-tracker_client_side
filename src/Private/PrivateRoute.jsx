/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading}= useAuth()
    if(loading){
        return <h3 className="text-center text-2xl">Loading...</h3>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'/>
}
 
export default PrivateRoute;