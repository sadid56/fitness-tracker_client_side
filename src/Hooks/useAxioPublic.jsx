import axios from "axios";

const useAxios = axios.create({
    baseURL: 'https://assignment12-server-side-ten.vercel.app'
})

const useAxiosPublic = () => {
    return useAxios;
}
 
export default useAxiosPublic;