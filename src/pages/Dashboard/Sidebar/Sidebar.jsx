// import { useState } from 'react'
// import { GrLogout } from 'react-icons/gr'
// import { FcSettings } from 'react-icons/fc'
// import { MdOutlineFlightClass } from 'react-icons/md'
// import { AiOutlineBars } from 'react-icons/ai'

// import { NavLink } from 'react-router-dom'
// import useAuth from '../../../hooks/useAuth'
// import { Link } from 'react-router-dom'
// import icon from "../../../assets/icon.png"
// import useRole from '../../../hooks/useRole'
// import { FaHome } from 'react-icons/fa'

// ****************
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from '../../../hooks/useAuth'
import useRole from '../../../hooks/useRole'
import StudentMenu from "../../../components/DashboardMenu/StudentMenu";
import TeacherMenu from "../../../components/DashboardMenu/TeacherMenu";
import AdminMenu from "../../../components/DashboardMenu/AdminMenu";
import HomeDashboard from "../../../components/CommonMenu/HomeDashboard";
import UserProfileDashboard from "../../../components/CommonMenu/UserProfileDashboard";
import LogoutDashboard from "../../../components/CommonMenu/LogoutDashboard";
import img01 from "../../../assets/icon.png"

const Sidebar = () => {
    const {user} = useAuth()
    const { logOut } = useAuth()
    const [role] = useRole()
    const [isOpen, setIsOpen] = useState(false);
    const profile = user?.photoURL


    return (
        // <>
        //     {/* Small Screen Navbar */}
        //     <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        //         <div>
        //             <div className='block cursor-pointer p-4 font-bold'>
        //                 <Link to='/' className="flex items-center">
        //                     <img src={icon} alt="" />
        //                     <h2 className="text-2xl font-bold">Teach<span className="text-primary">Em</span></h2>
        //                 </Link>
        //             </div>
        //         </div>

        //         <button
        //             onClick={handleToggle}
        //             className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        //         >
        //             <AiOutlineBars className='h-5 w-5' />
        //         </button>
        //     </div>

        //     {/* Sidebar */}
        //     <div
        //         className={`z-10 md:fixed flex flex-col  overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
        //             }  md:translate-x-0  transition duration-200 ease-in-out`}
        //     >
        //         <div>
        //             <div>
        //                 <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-green-200 mx-auto'>
        //                     <Link to='/' className="flex items-center">
        //                         <img src={icon} alt="" />
        //                         <h2 className="text-2xl font-bold">Teach<span className="text-primary">Em</span></h2>
        //                     </Link>
        //                 </div>
        //             </div>

        //             {/* Nav Items */}
        //             <div className='flex flex-col justify-between flex-1 mt-6'>
        //                 {/* Conditional toggle button here.. */}

        //                 {/*  Menu Items */}
        //                 <nav>
        //                     {/* Student dashboard routes */}
        //                     {
        //                         role === 'student' ? <div>
        //                             <NavLink
        //                                 to='/dashboard/my-enroll-class'
        //                                 end
        //                                 className={({ isActive }) =>
        //                                     `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                                     }`
        //                                 }
        //                             >
        //                                 <MdOutlineFlightClass className='w-5 h-5' />

        //                                 <span className='mx-4 font-medium'>My enroll class</span>
        //                             </NavLink>
        //                         </div>
        //                             :
        //                             ''
        //                     }

        //                     {/* Teacher dashboard routes */}
        //                     {
        //                         role === 'teacher' ? <div>
        //                             <NavLink
        //                                 to='/dashboard/add-class'
        //                                 end
        //                                 className={({ isActive }) =>
        //                                     `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                                     }`
        //                                 }
        //                             >
        //                                 <MdOutlineFlightClass className='w-5 h-5' />

        //                                 <span className='mx-4 font-medium'>Add Class</span>
        //                             </NavLink>

        //                             <NavLink
        //                                 to='/dashboard/my-class'
        //                                 end
        //                                 className={({ isActive }) =>
        //                                     `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                                     }`
        //                                 }
        //                             >
        //                                 <MdOutlineFlightClass className='w-5 h-5' />

        //                                 <span className='mx-4 font-medium'>My Class</span>
        //                             </NavLink>
        //                         </div>
        //                             :
        //                             ''
        //                     }

        //                     {/* Admin dashboard routes */}
        //                     {
        //                         role === 'admin' ? <div>
        //                             <NavLink
        //                                 to='/dashboard/teacher-request'
        //                                 end
        //                                 className={({ isActive }) =>
        //                                     `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                                     }`
        //                                 }
        //                             >
        //                                 <MdOutlineFlightClass className='w-5 h-5' />

        //                                 <span className='mx-4 font-medium'>Teacher Request</span>
        //                             </NavLink>

        //                             <NavLink
        //                                 to='/dashboard/users'
        //                                 end
        //                                 className={({ isActive }) =>
        //                                     `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                                     }`
        //                                 }
        //                             >
        //                                 <MdOutlineFlightClass className='w-5 h-5' />

        //                                 <span className='mx-4 font-medium'>Users</span>
        //                             </NavLink>
        //                             <NavLink
        //                                 to='/dashboard/all-class'
        //                                 end
        //                                 className={({ isActive }) =>
        //                                     `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                                     }`
        //                                 }
        //                             >
        //                                 <MdOutlineFlightClass className='w-5 h-5' />

        //                                 <span className='mx-4 font-medium'>All Class</span>
        //                             </NavLink>
        //                         </div>
        //                             :
        //                             ''
        //                     }

        //                 </nav>
        //             </div>
        //         </div>

        //         <div>
        //             <hr />

        //             {/* Home Menu */}
        //             <NavLink
        //                 to='/'
        //                 className={({ isActive }) =>
        //                     `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                     }`
        //                 }
        //             >
        //                 <FaHome className='w-5 h-5' />

        //                 <span className='mx-4 font-medium'>Home</span>
        //             </NavLink>

        //             {/* student profile menu */}
        //             {
        //                 role === 'student' ? <NavLink
        //                     to='/dashboard/student-profile'
        //                     className={({ isActive }) =>
        //                         `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                         }`
        //                     }
        //                 >
        //                     <FcSettings className='w-5 h-5' />

        //                     <span className='mx-4 font-medium'>Profile</span>
        //                 </NavLink>
        //                     :
        //                     ''
        //             }
        //             {/* teacher profile menu */}
        //             {
        //                 role === 'teacher' ? <NavLink
        //                     to='/dashboard/teacher-profile'
        //                     className={({ isActive }) =>
        //                         `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                         }`
        //                     }
        //                 >
        //                     <FcSettings className='w-5 h-5' />

        //                     <span className='mx-4 font-medium'>Profile</span>
        //                 </NavLink>
        //                     :
        //                     ''
        //             }

        //             {/* Admin profile menu */}
        //             {
        //                 role === 'admin' ? <NavLink
        //                     to='/dashboard/admin-profile'
        //                     className={({ isActive }) =>
        //                         `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        //                         }`
        //                     }
        //                 >
        //                     <FcSettings className='w-5 h-5' />

        //                     <span className='mx-4 font-medium'>Profile</span>
        //                 </NavLink>
        //                     :
        //                     ''
        //             }

        //             <NavLink to='/login'>
        //                 <button
        //                     onClick={logOut}
        //                     className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
        //                 >
        //                     <GrLogout className='w-5 h-5' />

        //                     <span className='mx-4 font-medium'>Logout</span>
        //                 </button>
        //             </NavLink>
        //         </div>
        //     </div>
        // </>
        <>
            <div className="bg-gray-100 text-gray-800 lg:h-screen py-4 md:px-2">

                <div className="flex justify-between items-center bg-green-200">
                    {/* website name and logo */}
                    <div className="w-full flex items-center gap-1 rounded-md lg:shadow-md p-4">
                        <Link to='/' className="flex items-center">
                            <img src={img01} alt="" />
                            <h2 className="text-2xl font-bold">Teach<span className="text-primary">Em</span></h2>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden pr-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <TiThMenu className="text-2xl " />
                            ) : (
                                <IoMdClose className="text-2xl " />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div className={`absolute flex flex-col lg:hidden bg-gray-100 w-[89%] z-20 transition-all duration-300 ease-in-out 
             ${isOpen ? 'translate-x-8 opacity-100' : 'opacity-0 -translate-x-full'
                    }`}
                >
                    <div className="">
                        {/* menu items for student */}
                        <StudentMenu role={role} />

                        {/* menu items for teacher */}
                        <TeacherMenu role={role} />

                        {/* menu items for admin */}
                        <AdminMenu role={role} />


                        {/* user---> Home/Profile/Logout menu */}
                        <div className="">
                            <hr />
                            {/* Home Menu */}
                            <HomeDashboard />

                            {/* profile menu */}
                            <UserProfileDashboard role={role}/>

                            {/* logout menu */}
                            <LogoutDashboard logOut={logOut} />
                        </div>
                    </div>
                </div>



                {/*------> Large Device for <----------*/}
                <div className="hidden lg:block">
                    {/* menu items for student */}
                    <StudentMenu role={role} />

                    {/* menu items for teacher */}
                    <TeacherMenu role={role} />

                    {/* menu items for admin */}
                    <AdminMenu role={role} />


                    {/* user---> Home/Profile/Logout menu */}
                    <div className="lg:mt-20">
                        <hr />
                        {/* Home Menu */}
                        <HomeDashboard />

                        {/* profile menu */}
                        <UserProfileDashboard role={role}/>

                        {/* logout menu */}
                        <LogoutDashboard logOut={logOut} />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;