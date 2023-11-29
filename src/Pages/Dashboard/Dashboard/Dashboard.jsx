import { Outlet } from "react-router-dom";
import SideBer from "../SideBer/SideBer";

const Dashboard = () => {
    return ( 
        <div className="w-full flex h-full">
            <div className="w-[25%] bg-[#B9005B] fixed h-full overflow-x-auto">
                <SideBer/>
            </div>
            <div className="w-[75%] ml-[25%]">
                <Outlet/>
            </div>
        </div>
     );
}
 
export default Dashboard;