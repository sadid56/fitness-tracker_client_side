import { Outlet } from "react-router-dom";
import SideBer from "../SideBer/SideBer";

const Dashboard = () => {
    return ( 
        <div className="w-full flex h-screen">
            <div className="w-[25%] bg-slate-300">
                <SideBer/>
            </div>
            <div className="w-[75%] ">
                <Outlet/>
            </div>
        </div>
     );
}
 
export default Dashboard;