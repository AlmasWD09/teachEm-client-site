import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllClassess from "../pages/AllClassess/AllClassess";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import TeachOn from "../pages/TeachOn/TeachOn";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyEnrollClass from "../pages/Dashboard/Student/MyEnrollClass/MyEnrollClass";
import StudentProfile from "../pages/Dashboard/Student/StudentProfile/StudentProfile";
import MyEnrollDetails from "../pages/Dashboard/Student/MyEnrollDetails/MyEnrollDetails";
import AddClass from "../pages/Dashboard/Teacher/AddClass/AddClass";
import MyClass from "../pages/Dashboard/Teacher/MyClass/MyClass";
import TeacherProfile from "../pages/Dashboard/Teacher/TeacherProfile/TeacherProfile";
import TeacherRequest from "../pages/Dashboard/Admin/TeacherRequest/TeacherRequest";
import Users from "../pages/Dashboard/Admin/Users/Users";
import AllClass from "../pages/Dashboard/Admin/AllClass/AllClass";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile";
import UpdatedModal from "../components/Modal/UpdateModal/UpdatedModal";
import NotFound from "../pages/NotFound/NotFound";
import Details from "../pages/Dashboard/Teacher/Details/Details";
import ClassDetails from "../pages/AllClassess/ClassDetails/ClassDetails";
import PrivatRoutes from "./PrivatRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement:<NotFound />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/all-classes',
            element: <AllClassess />
          },
          {
            path: '/class-details/:id',
            element: <PrivatRoutes>
              <ClassDetails />
            </PrivatRoutes>
          },
          {
            path:'/teach-on',
            element:<PrivatRoutes>
              <TeachOn />
            </PrivatRoutes>
          },
        ],
      },
      // sign up and login routes
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
      // dashboard layouts
      {
        path:'/dashboard',
        element:<DashboardLayout />,
        children:[
          //========== student dashboard related routes start ==============
          {
            path:'my-enroll-class',
            element:<MyEnrollClass />
          },
          {
            path:'my-enroll-dtails/:id',
            element:<MyEnrollDetails />
          },
          {
            path:'student-profile',
            element:<StudentProfile />
          },
     
          //========== student dashboard related routes end ================

          //========== teacher dashboard related routes start ==============
          {
            path:'add-class',
            element:<AddClass />
          },
          {
            path:'update-class/:id',
            element:<UpdatedModal />
          },
          {
            path:'my-class',
            element:<MyClass />
          },
          {
            path:'details/:id',
            element:<Details />
          },
          {
            path:'teacher-profile',
            element:<TeacherProfile />
          },
          //========== student dashboard related routes end ================


          //========== Admin dashboard related routes start ==============
          {
            path:'teacher-request',
            element:<TeacherRequest />
          },
          {
            path:'users',
            element:<Users />
          },
          {
            path:'all-class',
            element:<AllClass />
          },
          {
            path:'admin-profile',
            element:<AdminProfile />
          },
          //========== Admin dashboard related routes end ================
        ]
      },
    ]);
  export default router