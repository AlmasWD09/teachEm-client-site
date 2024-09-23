import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import DashboardNav from "../Shared/dashboardNav/DashboardNav";

const DashboardLayout = () => {
  return (
    <>
<DashboardNav />
      <div className="relative flex flex-col lg:flex-row gap-4 ">
        {/* sidebar */}
        <div className="w-full lg:w-[25%] h-screen fixed  left-0  lg:px-4 bg-white z-10 ">
          <Sidebar />
        </div>

        {/* outlet */}
        <div className="flex-1 lg:ml-[25%] h-screen bg-green-400 overflow-y-auto rounded-b-md ">
          <Outlet />
        </div>

      </div>
    </>
  );
};

export default DashboardLayout;
