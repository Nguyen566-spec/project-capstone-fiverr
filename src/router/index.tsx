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
      element: <AdminLayout />
    }
  ]);
  return elements;
};

export default Router;
