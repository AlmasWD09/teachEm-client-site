import { FcSettings } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const UserProfileDashboard = ({ role }) => {
    return (
        <div>
            {/* Student profile */}
            {
                role === 'student' && <div>
                    <NavLink
                        to='/dashboard/student-profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                </div>
            }



            {/* Teacher profile */}
            {
                role === 'teacher' && <div>
                    <NavLink
                        to='/dashboard/teacher-profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                </div>
            }


            
            {/* Admin profile */}
            {
                role === 'admin' && <div>
                    <NavLink
                        to='/dashboard/admin-profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                </div>
            }
        </div >
    );
};
// props-type validation
UserProfileDashboard.propTypes = {
    role: PropTypes.string,
};
export default UserProfileDashboard;