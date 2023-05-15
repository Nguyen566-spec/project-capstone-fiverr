import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CongViecDetail from "../pages/CongViecDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import User from "../components/User";
import AdminLayout from "../layout/AdminLayout";
import ManageWork from "../components/admin/ManageWork";
import ManageService from "../components/admin/ManageService";
import ManageUser from "../components/admin/ManageUser";
import ManageTypeWork from "../components/admin/ManageTypeWork";
import Dasboard from "../pages/Dasboard";

const Router = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: ":id",
          element: <CongViecDetail />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "user",
          element : <User />
        }
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path : "/admin",
      element: <AdminLayout />,
      children: [
        {
          path : "",
          element : <Dasboard />
        },
        {
          path: "manage-work",
          element: <ManageWork />,
        },
        {
          path: "manage-service",
          element: <ManageService />,
        },
        {
          path: "manage-user",
          element: <ManageUser />,
        },
        {
          path: "manage-type-work",
          element : <ManageTypeWork />
        }
      ],
    }
  ]);
  return elements;
};

export default Router;
