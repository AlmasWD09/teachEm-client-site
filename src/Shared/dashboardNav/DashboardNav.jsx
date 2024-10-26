import { Link, useNavigate } from "react-router-dom";
import icon from "../../../src/assets/icon.png"
import icon2 from "../../../src/assets/icon2.png"
import useTheme from "../../hooks/useTheme";

const DashboardNav = () => {
    const navigate = useNavigate();
    const { mode } = useTheme();
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className={`sticky top-0 left-0 z-[99999] w-full h-[80px] ${mode === "dark" ? "bg-gray-900" : "bg-seconderyGray"} hidden lg:block`}>
            <div className="flex justify-between items-center px-12 h-full">
                <div>
                    <Link to='/' className="flex items-center">
                    {mode === 'dark' ? <img src={icon2} alt="" /> : <img src={icon} alt="" />}
                        <h2 className="text-2xl font-bold">Teach<span className="text-primary">Em</span></h2>
                    </Link>
                </div>

                <div>
                    <button
                        onClick={handleNavigate}
                        className="bg-secondery hover:bg-primary text-white rounded-md font-medium text-xl px-6 py-2">Home</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;