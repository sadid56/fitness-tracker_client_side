import SectionHelmet from "../../../Components/SectionHelmet";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return ( 
        <div>
            <SectionHelmet title={'Strong | Home'}/>
            <Banner/>
            <Featured/>
            <Testimonial/>
        </div>
     );
}
 
export default Home;