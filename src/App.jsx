import Cart from "./Components/Cart/Cart.jsx";
import Body from "./Components/Body.jsx";
import Form from "./Components/Auth/Form.jsx";
import store from "./redux/store.js";
import ReactDOM from "react-dom/client";
import RouteError from "./Components/ErrorUI/RouteError/RouteError.jsx";
import AuthLayout from "./Components/Auth/AuthLayout.jsx";
import UserProfile from "./Components/UserProfile/UserCLass.jsx";
import AppLayout_SuperFood from "./Index.Jsx";
import { Provider } from "react-redux";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Contact from "./Components/Contact/Contact.jsx";

//Implementing Lazy-load
const AboutUS = lazy(() => import("./Components/AboutUs/AboutUS.jsx"));
const MenuPage = lazy(() => import("./Components/MenuPage/MenuPage.jsx"));

const router = createBrowserRouter([
  {
    element: <AuthLayout />, // 🔐 global auth check
    children: [
      {
        path: "/auth",
        children: [
          {
            path: "form",
            element: <Form />,
          },
        ],
      },

      {
        path: "/",
        element: <AppLayout_SuperFood />,
        errorElement: <RouteError />,
        children: [
          {
            index: true,
            element: <Body />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "about",
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
    ],
  },
]);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
  </Provider>,
);
