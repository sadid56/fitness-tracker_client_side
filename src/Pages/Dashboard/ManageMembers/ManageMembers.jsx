import { useQuery } from "@tanstack/react-query";
import SectionHelmet from "../../../Components/SectionHelmet";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageMembers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    console.log(users);
    return ( 
        <div>
            <SectionHelmet title={'Strong | dashboard-manage Members'} />
            <SectionTitle title={'Manage All Members'} />

          
            <div className="overflow-x-auto mx-10 shadow-lg border">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th ></th>
        <th className="text-xl">Name</th>
        <th className="text-xl">Email</th>
        <th className="text-xl">Role</th>
        <th className="text-xl">Send Email</th>
      </tr>
    </thead>
    <tbody>
    
    {
        users.map((user, index) =>  <tr key={user._id}>
            <th className="text-xl">{index + 1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.role}</td>
            <td><button className="btn">Send</button></td>
          </tr>)
    }
     
    
     
    </tbody>
  </table>
</div>
            
        </div>
     );
}
 
export default ManageMembers;