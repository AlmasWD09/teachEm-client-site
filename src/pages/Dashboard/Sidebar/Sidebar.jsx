
import { IoMdClose } from "react-icons/io";
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
import icon from "../../../assets/icon.png"
import { RiMenu3Fill } from "react-icons/ri";

const Sidebar = () => {
    const { logOut } = useAuth()
    const [role] = useRole()
    const [isOpen, setIsOpen] = useState(false);


    return (

        <>
            <div className="text-gray-800 lg:bg-gray-100 dark:bg-gray-900  lg:pb-8 lg:shadow lg:border dark:lg:border-gray-600 lg:p-4 lg:rounded-b-md">
                {/* dashboar navbar */}
                <div className="flex justify-between items-center px-3 py-3 fixed w-full bg-seconderyGray lg:hidden">
                    <div className="">
                        <Link to='/' className="flex items-center">
                            <img src={icon} alt="" />
                            <h2 className="text-2xl font-bold">Teach<span className="text-primary">Em</span></h2>
                        </Link>
                    </div>

                    <div className="bg-primary  px-4 py-2 rounded-md">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="  text-white"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <RiMenu3Fill className="text-2xl " />
                            ) : (
                                <IoMdClose className="text-2xl " />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div className={`mt-[74px] lg:mt-0 absolute flex flex-col lg:hidden text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 pb-8 shadow border p-4 rounded-b-md w-[90%] z-20 transition-all duration-300 ease-in-out 
             ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
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
                            <UserProfileDashboard role={role} />

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
                        <hr  className="dark:lg:border-gray-600"/>
                        {/* Home Menu */}
                        <HomeDashboard />

                        {/* profile menu */}
                        <UserProfileDashboard role={role} />

                        {/* logout menu */}
                        <LogoutDashboard logOut={logOut} />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;