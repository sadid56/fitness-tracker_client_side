import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth()
    // console.log(user);
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin} = useQuery({
        queryKey:[ 'admin'],
        queryFn: async()=>{
           const res = await axiosSecure.get(`/users/${user?.email}`)
           return res.data?.admin;
        }
    })
    console.log(isAdmin, '--');
    return [isAdmin]
}
 
export default useAdmin;