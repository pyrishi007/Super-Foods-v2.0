import Body from "./Components/Body.jsx";
import store from "./redux/store.js";
import Cart from "./Components/Cart/Cart.jsx";
import ReactDOM from "react-dom/client";
import UserProfile from "./Components/UserProfile/UserCLass.jsx";
import RouteError from "./Components/ErrorUI/RouteError/RouteError.jsx";
import AppLayout_SuperFood from "./Index.Jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import SignInForm from "./Components/Auth/SignInForm.jsx";
import AuthLayout from "./Components/Auth/AuthLayout.jsx";

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
        element: <SignInForm />
      },
    ]
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
    <RouterProvider router={router} />
  </Provider>,
);
