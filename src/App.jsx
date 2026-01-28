import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Navigation/Header.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import UserProfile from "./Components/UserProfile/UserCLass.jsx";
import RouteError from "./Components/ErrorUI/RouteError/RouteError.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//Implementing Lazy-load
const AboutUS = lazy(() => import("./Components/AboutUs/AboutUS.jsx"));
const MenuPage = lazy(() => import("./Components/MenuPage/MenuPage.jsx"));

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
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout_SuperFood />,
    errorElement: <RouteError />,

    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "About",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <AboutUS />
          </Suspense>
        ),
      },
      {
        path: "restaurant/Menupage/:resID",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <MenuPage />
          </Suspense>
        ),
      },
      {
        path: "UserProfile.info",
        element: <UserProfile name={"rishi"} />,
      },
    ],
  },
]);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
