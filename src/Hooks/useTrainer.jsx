import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useTrainer = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isTrainer} = useQuery({
        queryKey: ['trainer'],
        queryFn: async()=>{
           const res = await axiosSecure.get(`/users/${user?.email}`)
           return res.data?.admin;
        }
    })
    return [isTrainer]
}
 
export default useTrainer;