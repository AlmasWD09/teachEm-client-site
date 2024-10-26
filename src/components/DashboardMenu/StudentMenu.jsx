import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import PropTypes from 'prop-types';

const StudentMenu = ({ role }) => {

    return (
        <div>
            {/* menu items for student */}
            {
                role === 'student' ? <div>
                    <NavLink
                        to='/dashboard/my-enroll-class'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 dark:hover:text-gray-600 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600 dark:text-white'}`}>
                        <FaHome className='w-5 h-5' />
                        <span className='mx-4 font-medium'>My Enroll Class</span>
                    </NavLink>
                </div>
                    :
                    ''
            }
        </div>
    );
};
// props-type validation
StudentMenu.propTypes = {
    role: PropTypes.string,
};
export default StudentMenu;