import { useState } from "react";

const SignInForm = () => {
  const [isSignUpform, setForm] = useState(false);

  const handleForm = () => {
    setForm(!isSignUpform);
    console.log(isSignUpform);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-6">
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
              type="email"
              placeholder="Email"
              className="h-12 px-5 border shadow-lg rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="h-12 px-5 border shadow-lg  rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <button className="h-12 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition">
              {isSignUpform ? "Sign Up" : "Login"}
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
              onClick={handleForm}
            >
              {isSignUpform ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="food"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
