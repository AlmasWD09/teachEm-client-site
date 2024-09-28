
import Accroding from "./Accroding/Accroding";
import HigestEnrollClass from "./HigestEnrollClass/HigestEnrollClass";
import Instructor from "./Instructor/Instructor";
import OurCourses from "./OurCourses/OurCourses";
import Slider from "./Slider/Slider";
import TeachInfo from "./teachInfo/TeachInfo";
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
            <Instructor />
            <WebsiteInfo />
            <Accroding />
            {/* <TeachInfo /> */}
        
        </div>
    );
};

export default Home;