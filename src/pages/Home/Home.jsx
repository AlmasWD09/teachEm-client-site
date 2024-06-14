import Banner from "./Bannar/Banner";
import Instructor from "./Instructor/Instructor";
import OurCourses from "./OurCourses/OurCourses";
import TeachPartner from "./TeachPartner/TeachPartner";


const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <TeachPartner />
            <OurCourses />
            <Instructor />
        </div>
    );
};

export default Home;