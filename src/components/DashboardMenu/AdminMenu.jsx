import { MdFlightClass } from "react-icons/md";
import { IoMdGitPullRequest } from "react-icons/io";
import { HiMiniUsers } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const AdminMenu = ({ role }) => {
    return (
        <div>
            {/* menu items for admin */}
            {
                role === 'admin' ? <div>
                    <NavLink
                        to='/dashboard/teacher-request'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 dark:hover:text-gray-600 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600 dark:text-white'}`}>
                        <IoMdGitPullRequest className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Teacher request</span>
                    </NavLink>
                    <NavLink
                        to='/dashboard/users'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 dark:hover:text-gray-600 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600 dark:text-white'}`}>
                        <HiMiniUsers className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Users</span>
                    </NavLink>
                    <NavLink
                        to='/dashboard/all-class'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 dark:hover:text-gray-600 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600 dark:text-white'}`}>
                        <MdFlightClass className='w-5 h-5' />
                        <span className='mx-4 font-medium'>All Class</span>
                    </NavLink>
                </div>
                    :
                    ''
            }
        </div>
    );
};
// props-type validation
AdminMenu.propTypes = {
    role: PropTypes.string,
};
export default AdminMenu;