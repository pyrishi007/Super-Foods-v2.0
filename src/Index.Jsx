import React from "react";
import Header from "./Components/Navigation/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

// Layout component that wraps Header, Footer, and nested page content
const AppLayout_SuperFood = () => {
  return (
    <>
      <React.StrictMode>
        <Header />
        <Outlet />
        <Footer />
      </React.StrictMode>
    </>
  );
};

export default AppLayout_SuperFood;
