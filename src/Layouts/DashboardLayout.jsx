import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import DashboardNav from "../Shared/dashboardNav/DashboardNav";
import useTheme from "../hooks/useTheme";

const DashboardLayout = () => {
  const { mode } = useTheme();
  return (
    <>
      <DashboardNav />
      <div className={`flex flex-col lg:flex-row gap-4 ${mode === 'dark' ? 'bg-gray-900 lg:h-screen' : ''}`}>

        {/* sidebar */}
        <div className={`w-full lg:w-[25%] lg:h-screen lg:fixed left-0 lg:px-4 ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'} z-10`}>

          <Sidebar mode={mode} />
        </div>

        {/* outlet */}
        <div className={`flex-1 lg:ml-[25%] lg:mr-4 lg:mt-4 overflow-y-hidden rounded-b-md ${mode === 'dark' ? 'bg-gray-900' : ''}`}>
          <Outlet />
        </div>

      </div>
    </>
  );
};

export default DashboardLayout;
