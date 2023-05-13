import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Category from "../components/Category";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Category/>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
