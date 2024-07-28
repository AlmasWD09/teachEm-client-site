import { GrLogout } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const LogoutDashboard = ({ logOut }) => {
    return (
        <div>
            <NavLink to='/login'>
                <button
                    onClick={logOut}
                    className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                >
                    <GrLogout className='w-5 h-5' />
                    <span className='mx-4 font-medium'>Logout</span>
                </button>
            </NavLink>
        </div>
    );
};
// props-type validation
LogoutDashboard.propTypes = {
    logOut: PropTypes.func,
};
export default LogoutDashboard;