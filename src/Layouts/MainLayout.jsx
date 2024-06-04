
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className=''>
        <Navbar />
        <div className="min-h-[calc(100vh-333px)] max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <Outlet />
        </div>
        <Footer />
    </div>
    );
};

export default MainLayout;