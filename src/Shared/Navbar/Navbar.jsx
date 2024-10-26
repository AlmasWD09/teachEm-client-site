import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import icon from "../../assets/icon.png"
import icon2 from "../../assets/icon2.png"
import Container from "../Container/Container";
import { RiMenu3Fill } from "react-icons/ri";
import { CiDark, CiLight } from "react-icons/ci";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false);
    const { handleChangeTheme, mode } = useTheme()
    console.log(user,'navba line-----------> 17');
    return (
        <section className=' bg-white dark:bg-gray-900 z-50 shadow-sm fixed w-full '>
            <nav className=" px-3 md:px-0 py-4 ">
                <Container>
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Link to='/' className="flex items-center">
                                    {mode === 'dark' ? <img src={icon2} alt="" /> : <img src={icon} alt="" />}
                                    <h2 className="text-2xl font-bold">Teach<span className="text-primary">Em</span></h2>
                                </Link>

                                {/* toggle theme add */}
                                <button onClick={handleChangeTheme} className="border-2 border-primary p-1 rounded-full dark:border-primary">
                                    {mode === 'dark' ? <CiLight className="text-3xl text-primary" /> : <CiDark className="text-3xl text-primary" />}
                                </button>
                            </div>

                            {/* Mobile menu button */}
                            <div className="bg-primary  px-4 py-2 rounded-md flex lg:hidden">
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
                        <div
                            className={` mt-4 absolute pb-8 lg:pb-0 shadow lg:shadow-none border lg:border-none rounded-b-md lg:rounded-b-md inset-x-0 z-20 w-[90%] px-6 py-4 transition-all duration-300 ease-in-out bg-gray-100  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                                }`}
                        >
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                <NavLink to='/' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-primary">
                                    Home
                                </NavLink>
                                <NavLink to='/all-classes' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-primary">
                                    All Classes
                                </NavLink>
                                <NavLink to='/teach-on' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-primary">
                                    Teach On ThechEm
                                </NavLink>
                                <NavLink to='/login' className="text-xl font-bold px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-primary">
                                    Login
                                </NavLink>
                            </div>
                            {
                                user ? <div className='dropdown lg:dropdown-end z-50 '>
                                    <div
                                        tabIndex={0}
                                        role='button'
                                        className='btn btn-ghost btn-circle avatar'
                                    >
                                        <div className='w-10 rounded-full' title={user?.displayName}>
                                            <img
                                                referrerPolicy='no-referrer'
                                                src={user?.photoURL}
                                                alt=''
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-900 rounded-box w-52'
                                    >
                                        <li>
                                            <div className='justify-between'>{user.displayName}</div>
                                        </li>
                                        <li>
                                            <Link to='/dashboard'><div className='justify-between'>Dashboard</div></Link>
                                        </li>
                                        <li className='mt-2'>
                                            <button
                                                onClick={logOut}
                                                className='bg-gray-200 block text-center dark:hover:bg-slate-300 dark:text-gray-500'>Logout</button>
                                        </li>
                                    </ul>
                                </div>
                                    :
                                    <Link to='/signUp'>
                                        <button className="px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary
                                        rounded-md hover:bg-secondery focus:outline-none focus:bg-secondery">SignUp</button>
                                    </Link>
                            }
                        </div>
                    </div>
                </Container>
            </nav>
        </section>
    );
};

export default Navbar;