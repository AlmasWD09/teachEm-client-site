import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HomeDashboard = () => {
    return (
        <div>
            {/* Home Menu */}
            <NavLink
                to='/'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 dark:hover:text-gray-600 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600 dark:text-white'}`}
            >
                <FaHome className='w-5 h-5' />

                <span className='mx-4 font-medium'>Home</span>
            </NavLink>
        </div>
    );
};

export default HomeDashboard;