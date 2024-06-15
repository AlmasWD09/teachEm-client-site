
import Instructor from "./Instructor/Instructor";
import OurCourses from "./OurCourses/OurCourses";
import Slider from "./Slider/Slider";
import TeachPartner from "./TeachPartner/TeachPartner";


const Home = () => {
    return (
        <div>
            {/* <Slider /> */}
            <TeachPartner />
            <OurCourses />
            <Instructor />
        </div>
    );
};

export default Home;