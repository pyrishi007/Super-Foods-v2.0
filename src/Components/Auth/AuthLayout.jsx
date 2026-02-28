import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../service/authSDK";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/userSlice";

const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            userID: user.uid,
            userEmail: user.email,
          }),
        );

        if (location.pathname.startsWith("/auth")) {
          navigate("/");
        }
      } else {
        if (!location.pathname.startsWith("/auth")) {
          navigate("/auth/form");
        }
      }

      setChecking(false);
    });

    return () => unsubscribe();
  }, [dispatch, navigate, location.pathname]);

  if (checking) return <h1>Checking auth...</h1>;

  return <Outlet />;
};

export default AuthLayout;
