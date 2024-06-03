import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllClassess from "../pages/AllClassess/AllClassess";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import TeachOn from "../pages/TeachOn/TeachOn";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
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
            path:'/teach-on',
            element:<TeachOn />
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
    ]);
  export default router