import Header from "./Components/Nav/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

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
