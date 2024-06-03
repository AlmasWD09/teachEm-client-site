
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className=''>
        <Navbar />
        <div className="min-h-[calc(100vh-333px)] max-w-screen-xl mx-auto">
        <Outlet />
        </div>
        <Footer />
    </div>
    );
};

export default MainLayout;