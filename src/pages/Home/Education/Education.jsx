import { Link } from "react-router-dom";
import photo from "../../../assets/partner-logo/education.jpg"

const Education = () => {
    return (
        <div className="flex justify-between items-center mt-10">
            <div className="w-[50%]">
                <img src={photo} alt="" />
            </div>
            <div className="w-[50%] space-y-3">
                <h2 className="text-3xl font-semibold uppercase w-[500px]">Take the next step toward your personal and professional goals with Coursera.</h2>
                <p className="w-[400px]">Join now to receive personalized recommendations from the full Coursera catalog.</p>
                <Link to='/dashboard/my-class'>
                <button className="mt-3 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Explore Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Education;