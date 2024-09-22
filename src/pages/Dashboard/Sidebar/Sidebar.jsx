
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
    const { logOut } = useAuth()
    const [role] = useRole()
    const [isOpen, setIsOpen] = useState(false);



    return (
       
        <>
            <div className=" text-gray-800 bg-gray-100 pb-8 shadow border p-4 rounded-b-md">

                <div className="flex justify-between items-center bg-green-200">
             
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