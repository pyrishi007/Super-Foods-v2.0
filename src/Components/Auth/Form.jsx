import { useState, useRef } from "react";
import formValidation from "../../utils/formValidation";
import auth from "../../service/authSDK";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
createUserWithEmailAndPassword;
import { toast } from "react-toastify";
import { AUTH_TOAST } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [isSignUpform, setForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  //Input ref
  const email = useRef();
  const password = useRef();

  //Navigation
  const navigate = useNavigate();

  //Form Change
  const handleChnageForm = () => {
    setForm(!isSignUpform);
  };

  const handleForm = () => {
    //Validating User-credential
    const validationMessage = formValidation(
      email.current.value,
      password.current.value,
    );

    setErrorMessage(validationMessage);
    if (validationMessage) return;

    if (!isSignUpform) {
      //Sign-IN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Welcome to Super Food’s 👋", AUTH_TOAST);
        })
        .catch((error) => {
          console.log(error.message);
          toast.error("User not found", AUTH_TOAST);
        });
    } else {
      // Sign-UP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Account successfully created", AUTH_TOAST);
        })
        .catch((error) => {
          toast.error("Account Already created", AUTH_TOAST);
        });
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="min-h-screen bg-gray-200 flex items-center justify-center px-6"
    >
      <div className="font w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-2">
        <div className="p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
            Welcome to{" "}
            <span className="text-amber-500 font-bold">Super Food's</span>
          </h2>

          <div className="flex flex-col gap-5">
            {isSignUpform && (
              <input
                type="text"
                placeholder="Full Name"
                className="h-12 px-5 border shadow-lg rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="h-12 px-5 border shadow-lg rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              ref={password}
              type="password"
              placeholder={isSignUpform ? "Create Password" : "Password"}
              className="h-12 px-5 border shadow-lg  rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <p className=" text-sm font-normal leading-relaxed text-center text-red-500">
              {errorMessage}
            </p>

            <button
              onClick={handleForm}
              className="h-12 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition"
            >
              {isSignUpform ? "Register" : "Login"}
            </button>
          </div>

          <div className="flex items-center gap-3 text-gray-400 text-sm mt-6">
            <div className="flex-1 h-[1px] bg-black/20"></div>
            <p className=" text-balck font-bold font-mono">OR</p>
            <div className="flex-1 h-[1px] bg-black/20"></div>
          </div>

          {/* SIGN UP */}
          <p className="text-sm text-gray-500 mt-6 text-center">
            {isSignUpform
              ? "Already have an account? "
              : "Don't have an account?"}{" "}
            <span
              className="text-amber-500 font-semibold cursor-pointer"
              onClick={handleChnageForm}
            >
              {isSignUpform ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="food"
            className="w-full h-full rounded-l-2xl object-cover"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
