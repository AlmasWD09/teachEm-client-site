import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";


const DashboardLayout = () => {
  return (
    //   <div className='relative min-h-screen md:flex'>
    //   {/* Sidebar */}
    //   <Sidebar />

    //   {/* Dynamic Outlet */}
    //   <div className='flex-1 md:ml-64'>
    //     <div className='p-5'>
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
    <div className="relative flex flex-col md:flex-row justify-between lg:gap-6 px-2">

      {/* sidebar */}
      <div className="w-full lg:w-[16%] ">
        <Sidebar />
      </div>

      {/* Outlet */}
      <div className="w-full h-screen lg:w-[84%] bg-green-200 rounded p-4 mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;