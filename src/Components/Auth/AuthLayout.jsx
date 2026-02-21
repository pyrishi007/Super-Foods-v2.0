import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../service/authSDK";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/userSlice";

const AuthLayout = () => {
 
  const dispatch = useDispatch()


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        dispatch(addUser({
          userID : user.uid,
          userEmail : user.email
        }))
        
      } else {
       
      }
    });
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
