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

//Implementing Lazy-load
const AboutUS = lazy(() => import("./Components/AboutUs/AboutUS.jsx"));
const MenuPage = lazy(() => import("./Components/MenuPage/MenuPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
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
      {
        path: "cart",
        element: <Cart />,
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
