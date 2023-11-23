import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (  
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default Main;