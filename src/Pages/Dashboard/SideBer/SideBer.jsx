import { NavLink } from "react-router-dom";
import { FaUserCircle, FaHouseUser, FaUsers, FaUserTie} from "react-icons/fa";
import { MdLocalActivity, MdPostAdd } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import "./sideber.css";
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import useAdmin from "../../../Hooks/useAdmin";
import useTrainer from "../../../Hooks/useTrainer";

const SideBer = () => {
  const [isAdmin]= useAdmin()
  const [isTrainer] = useTrainer()
  // console.log(isAdmin);
  // console.log(isTrainer);
  // const isTrainer = false;
  // const isAdmin = true;
  return (
    <div>
      <ul id="nav" className="text-xl font-medium space-y-3 p-5 h-full">
        

        {isTrainer && <>
            <li>
              <NavLink
                to="/dashboard/manage-members"
                className={"flex items-center gap-2"}>
                <FaUsers/> Manage Members
              </NavLink>
            </li>
           
            <li>
              <NavLink
                to="/dashboard/add-classes"
                className={"flex items-center gap-2"}>
                <SiGoogleclassroom/> Add New Class
              </NavLink>
            </li>
          </> }
        {  
        
          
          isAdmin && <>
          
          <li>
              <NavLink
                to="/dashboard/balance"
                className={"flex items-center gap-2"}>
                <FaMoneyCheckDollar /> Balance
              </NavLink>
            </li>
          <li>
              <NavLink
                to="/dashboard/all-subscriber"
                className={"flex items-center gap-2"}>
                <FaUsers /> All Subscriber
              </NavLink>
            </li>
          <li>
              <NavLink
                to="/dashboard/all-trainers"
                className={"flex items-center gap-2"}>
                <FaUserTie /> All Trainers
              </NavLink>
            </li>
          <li>
              <NavLink
                to="/dashboard/applied-trainers"
                className={"flex items-center gap-2"}>
                <BsFileEarmarkPost /> Applied Trainers
              </NavLink>
            </li>
          </> 

        }

        {
          !isAdmin && !isTrainer && <>
          {" "}
          <li>
            <NavLink
              to="/dashboard/activity"
              className={"flex items-center gap-2"}>
              <MdLocalActivity /> Activity Log
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/recommended-class"
              className={"flex items-center gap-2"}>
              <SiGoogleclassroom /> Recommended Classes{" "}
            </NavLink>
          </li>
        </> 
        }

        <hr />
        {
          isAdmin &&  <li>
          <NavLink
            to="/dashboard/add-forum"
            className={"flex items-center gap-2"}>
            <MdPostAdd/> Add New Forum
          </NavLink>
        </li> || isTrainer &&  <li>
              <NavLink
                to="/dashboard/add-forum"
                className={"flex items-center gap-2"}>
                <MdPostAdd/> Add New Forum
              </NavLink>
            </li>
        }
        <li>
          <NavLink to="/" className={"flex items-center gap-2"}>
            <FaHouseUser /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/profile"
            className={"flex items-center gap-2"}>
            <FaUserCircle /> Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBer;
