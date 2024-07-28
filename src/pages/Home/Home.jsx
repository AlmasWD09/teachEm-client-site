
import Accroding from "./Accroding/Accroding";
import Education from "./Education/Education";
import HigestEnrollClass from "./HigestEnrollClass/HigestEnrollClass";
import Instructor from "./Instructor/Instructor";
import OurCourses from "./OurCourses/OurCourses";
import Slider from "./Slider/Slider";
import TeachPartner from "./TeachPartner/TeachPartner";
import WebsiteInfo from "./WebsiteInfo/WebsiteInfo";



const Home = () => {
    return (
        <div>
            <Slider />
            <TeachPartner />

            {/* dynamic hova */}
            <HigestEnrollClass />

            <OurCourses />
            <WebsiteInfo />
            <Instructor />
            <Accroding />
            <Education />
        </div>
    );
};

export default Home;