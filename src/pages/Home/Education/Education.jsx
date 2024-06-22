import { Link } from "react-router-dom";
import photo from "../../../assets/partner-logo/education.jpg"

const Education = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mt-10">
            <div className="w-full md:w-[50%] flex justify-center md:justify-end">
                <img className="w-[70%] md:w-full" src={photo} alt="" />
            </div>

            <div className="w-full md:w-[50%] space-y-3 ">
                <h2 className="text-lg lg:text-3xl font-semibold uppercase w-[300px] lg:w-[500px]">Take the next step toward your personal and professional goals with Coursera.</h2>
                <p className="w-[300px] lg:w-[400px]">Join now to receive personalized recommendations from the full Coursera catalog.</p>
                <Link to='/dashboard/my-class'>
                <button className="mt-3 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Explore Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Education;