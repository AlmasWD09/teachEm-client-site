import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
// import { BsFingerprint, BsFillHouseAddFill } from 'react-icons/bs'
// import { GrUserAdmin } from 'react-icons/gr'
import { MdOutlineFlightClass } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'

import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import icon from "../../../assets/icon.png"
import { FaHome } from 'react-icons/fa'
import useRole from '../../../hooks/useRole'

const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)
    const{role}= useRole()


    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/' className="flex items-center">
                            <img src={icon} alt="" />
                            <h2 className="text-2xl font-bold">Teach<span className="text-primary">Em</span></h2>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col  overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-green-200 mx-auto'>
                            <Link to='/' className="flex items-center">
                                <img src={icon} alt="" />
                                <h2 className="text-2xl font-bold">Teach<span className="text-primary">Em</span></h2>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* Conditional toggle button here.. */}

                        {/*  Menu Items */}
                        <nav>
                            {/* Student dashboard routes */}
                            {
                                role === 'student' ? <div>
                                    <NavLink
                                        to='/dashboard/my-enroll-class'
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                            }`
                                        }
                                    >
                                        <MdOutlineFlightClass className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>My enroll class</span>
                                    </NavLink>
                                </div>
                                    :
                                    ''
                            }

                            {/* Teacher dashboard routes */}
                            {
                                role === 'teacher' ? <div>
                                    <NavLink
                                        to='/dashboard/add-class'
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                            }`
                                        }
                                    >
                                        <MdOutlineFlightClass className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>Add Class</span>
                                    </NavLink>

                                    <NavLink
                                        to='/dashboard/my-class'
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                            }`
                                        }
                                    >
                                        <MdOutlineFlightClass className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>My Class</span>
                                    </NavLink>
                                </div>
                                    :
                                    ''
                            }

                            {/* Admin dashboard routes */}
                            {
                                role === 'admin' ? <div>
                                    <NavLink
                                        to='/dashboard/teacher-request'
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                            }`
                                        }
                                    >
                                        <MdOutlineFlightClass className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>Teacher Request</span>
                                    </NavLink>

                                    <NavLink
                                        to='/dashboard/users'
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                            }`
                                        }
                                    >
                                        <MdOutlineFlightClass className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>Users</span>
                                    </NavLink>
                                    <NavLink
                                        to='/dashboard/all-class'
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                            }`
                                        }
                                    >
                                        <MdOutlineFlightClass className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>All Class</span>
                                    </NavLink>
                                </div>
                                    :
                                    ''
                            }

                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    {/* Home Menu */}
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FaHome className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Home</span>
                    </NavLink>

                    {/* student profile menu */}
                    {
                        role === 'student' ? <NavLink
                            to='/dashboard/student-profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <FcSettings className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Profile</span>
                        </NavLink>
                            :
                            ''
                    }
                    {/* teacher profile menu */}
                    {
                        role === 'teacher' ? <NavLink
                            to='/dashboard/teacher-profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <FcSettings className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Profile</span>
                        </NavLink>
                            :
                            ''
                    }

                    {/* Admin profile menu */}
                    {
                        role === 'admin' ? <NavLink
                            to='/dashboard/admin-profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <FcSettings className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Profile</span>
                        </NavLink>
                            :
                            ''
                    }

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
            </div>
        </>
    );
};

export default Sidebar;