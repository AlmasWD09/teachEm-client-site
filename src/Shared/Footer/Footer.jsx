import { useEffect, useState } from "react";
import icon from "../../assets/footer-icon.png"
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { GrGithub } from "react-icons/gr";
import { LiaFacebookF, LiaLinkedinIn } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import img01 from "../../assets/footer01.png"
import img02 from "../../assets/footer02.png"


const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
      setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <div className=" bg-slate-900 text-white py-10">
            <footer className="">
                <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-20 py-10">
                            {/* logo/webside-name */}
                            <div className="flex flex-col space-y-4 -mt-5">
                                <div className="flex items-center">
                                    <img className="h-[80px]" src={icon} alt="" />
                                    <div>
                                    <h1 className="text-4xl md:text-5xl text-primary font-semibold font-lato">Teach<span>Em</span></h1>
                                    <p className="italic">We Give Quality Service</p>
                                    </div>
                                </div>
                                <p>Our platform connects passionate educators with eager learners, providing a space for knowledge exchange across various subjects and skills.</p>
                                <div className="flex gap-3">
                                    <Link to='https://www.facebook.com/profile.php?id=100011977514856'><button className="bg-secondery border border-primary rounded-full hover:bg-primary transition-all duration-300 delay-100 text-xl p-4  hover:border-none "><LiaFacebookF /></button></Link>
                                    <Link to='https://github.com/AlmasWD09'><button className="bg-secondery border border-primary rounded-full hover:bg-primary transition-all duration-300 delay-100 text-xl p-4  hover:border-none "><GrGithub /></button></Link>
                                    <Link to='https://www.linkedin.com/in/almas-hossain'><button className="bg-secondery border border-primary rounded-full hover:bg-primary transition-all duration-300 delay-100 text-xl p-4  hover:border-none "><LiaLinkedinIn /></button></Link>

                                </div>
                            </div>
                            {/* link */}
                            <div className="flex flex-col space-y-4">
                                <h1 className="text-3xl font-semibold font-lato">Quick links</h1>
                                <span className="w-20 h-[3px] rounded-full bg-primary"></span>
                                <ul>
                                    <Link to='/'><li className="hover:text-primary cursor-pointer flex items-center"><IoIosArrowForward className=""/>Home</li></Link>
                                    <Link to='/all-classes'><li className="hover:text-primary cursor-pointer flex items-center"><IoIosArrowForward className=""/>All Classes</li></Link>
                                    <Link to='/teach-on'><li className="hover:text-primary cursor-pointer flex items-center"><IoIosArrowForward className=""/>Teach on TeachEm</li></Link>
                                    <Link to='/contact-us'><li className="hover:text-primary cursor-pointer flex items-center"><IoIosArrowForward className=""/>Contact Us</li></Link>

                                </ul>
                            </div>

                            {/*Latest Post*/}
                            <div className="flex flex-col space-y-4 ">
                                <h1 className="text-3xl font-semibold font-lato">Latest Post</h1>
                                <span className="w-20 h-[3px] rounded-full bg-primary"></span>
                                <div className="flex gap-3">
                                    <img src={img01} alt="" />
                                    <div>
                                    <h4>Nothing impossble to need hard work</h4>
                                    <p className="text-primary">7 March 2018</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <img src={img02} alt="" />
                                    <div>
                                    <h4>Nothing impossble to need hard work</h4>
                                    <p className="text-primary">7 March 2022</p>
                                    </div>
                                </div>
                            </div>

                               {/* contact */}
                               <div className="flex flex-col space-y-4 ">
                                <h1 className="text-3xl font-semibold font-lato">Contact Us</h1>
                                <span className="w-20 h-[3px] rounded-full bg-primary"></span>
                                <p className="flex items-center gap-2 bg-primary px-4 py-2 md:py-3 rounded-full"><FaLocationDot className="text-xl text-secondery" /> Mymensingh-Fulbaria, Bangladesh</p>
                                <p className="flex items-center gap-2 bg-primary px-4 py-2 md:py-3 rounded-full"><IoCallSharp className="text-xl text-secondery" /> +01704995802</p>
                                <p className="flex items-center gap-2 bg-primary px-4 py-2 md:py-3 rounded-full"><MdEmail className="text-xl text-secondery mr-1" />skalmas634@gmail.com</p>
                            </div>
                        </div>
                    </Container>
                        <hr />
                        <div className="px-4 md:px-0 py-10">
                            <div className="text-center space-y-1">
                                <p className="text-xl ">Copyright © {currentYear} TeachEm - Design By <span className="font-bold">Almas Hossain</span>.</p>
                            </div>
                        </div>
            </footer>
        </div>
    );
};

export default Footer;