
import Accroding from "./Accroding/Accroding";
import Education from "./Education/Education";
import Instructor from "./Instructor/Instructor";
import OurCourses from "./OurCourses/OurCourses";
import Slider from "./Slider/Slider";
import TeachPartner from "./TeachPartner/TeachPartner";



const Home = () => {
    return (
        <div>
            <Slider />
            <TeachPartner />
            <OurCourses />
            <Instructor />
            <Education />
            <Accroding />
        </div>
    );
};

export default Home;