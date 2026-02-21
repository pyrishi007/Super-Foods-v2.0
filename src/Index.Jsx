import Header from "./Components/Navigation/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

// Layout component that wraps Header, Footer, and nested page content
const AppLayout_SuperFood = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout_SuperFood;
