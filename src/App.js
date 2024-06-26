import React from 'react';
import './css/style.css'; 

import { EmployeeList } from './features/employee-list/EmployeeList';
import Dashboard from './pages/Dashboard';
import SignInPage from './pages/auth/SignInPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ForgotPassword from './pages/auth/ForgotPasswordPage';
import UserFormPage from './pages/UserFormPage';
import Sidebar from './partials/Sidebar';
import ChangePasswordPage from './pages/auth/ChangePasswordPage';





function App() {


const  router = createBrowserRouter([
    {
      path: "/signIn",
      element: (
        <SignInPage></SignInPage>
      ),
    },
    {
      path: "/forgotPassword",
      element: (
        <ForgotPassword></ForgotPassword>
      ),
    },
    {
      path: "/",
      element: (
        <Dashboard></Dashboard>
      ),
    },
    {
      path: "/userForm",
      element: (
        <UserFormPage></UserFormPage>
      ),
    },
    {
      path: "/changepassword",
      element: (
        <ChangePasswordPage></ChangePasswordPage>
      ),
    },
    {
      path: "/temp",
      element: (
        <Sidebar></Sidebar>
      ),
    },
  ])


  return (
  <RouterProvider router={router} />
  //  <Dashboard></Dashboard>  
  // <SignInPage></SignInPage>
  // <Sidebar></Sidebar>
  );
}

export default App;
