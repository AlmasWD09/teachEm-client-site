
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollTopButton from "../components/ScrollTopButton";


const MainLayout = () => {
    return (
        <div className=''>
        <Navbar />
        <div className="min-h-[calc(100vh-333px)]">
        <Outlet />
        </div>
        <Footer />
        <ScrollTopButton />
    </div>
    );
};

export default MainLayout;