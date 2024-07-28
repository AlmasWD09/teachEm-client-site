import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const TeacherMenu = ({ role }) => {
    return (
        <div>
            {
                role === 'teacher' ? <div>
                    <NavLink
                        to='/dashboard/add-class'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'}`}>
                        <FaHome className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Add Class</span>
                    </NavLink>
                    <NavLink
                        to='/dashboard/my-class'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'}`}>
                        <FaHome className='w-5 h-5' />
                        <span className='mx-4 font-medium'>My Class</span>
                    </NavLink>
                </div>
                    :
                    ''
            }
        </div>
    );
};
// props-type validation
TeacherMenu.propTypes = {
    role: PropTypes.string,
};
export default TeacherMenu;