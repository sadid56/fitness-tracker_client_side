import { NavLink } from "react-router-dom";
import { FaUserCircle, FaHouseUser  } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import './sideber.css'
import useAdmin from "../../../Hooks/useAdmin";
import useTrainer from "../../../Hooks/useTrainer";

const SideBer = () => {
    const [isAdmin]= useAdmin()
    const [isTrainer] = useTrainer()
    console.log(isAdmin);
    console.log(isTrainer);
    return ( 
        <div>
            <ul id="nav" className="text-xl font-medium space-y-3 p-5">
                {/* member related */}
                <li><NavLink to='/dashboard/activity' className={'flex items-center gap-2'}><MdLocalActivity/> Activity Log</NavLink></li>                
                <li><NavLink to='/dashboard/recommended-class' className={'flex items-center gap-2'}><SiGoogleclassroom/> Recommended Classes </NavLink></li>

                <hr />
                <li><NavLink to='/' className={'flex items-center gap-2'}><FaHouseUser/> Home</NavLink></li>
                <li><NavLink to='/dashboard/profile' className={'flex items-center gap-2'}><FaUserCircle/> Profile </NavLink></li>
            </ul>
        </div>
     );
}
 
export default SideBer;