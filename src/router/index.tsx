import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CategoryDetail from "../pages/CategoryDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobTypeDetail from "../pages/JobTypeDetail";
import JobDetail from "../pages/JobDetail";

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
          path: "category/:id",
          element: <CategoryDetail />,
        },
        {
          path: "job-type/:id",
          element: <JobTypeDetail />,
        },
        {
          path: "job/:id",
          element: <JobDetail />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
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
  ]);
  return elements;
};

export default Router;
