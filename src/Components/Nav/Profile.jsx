import profile from "../../Assets/userprofile.png";
import { useState } from "react";
import { signOut } from "firebase/auth";
import auth from "../../service/authSDK";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isClicked, setClick] = useState(false);
  const navigate =  useNavigate()

  const handleProfileClick = () => {
    setClick(!isClicked);
    console.log(isClicked);
  };

  const handlesignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/auth/form")
      })
      .catch((error) => {
        navigate("/error")
      });
  };

  return (
    <>
      <div className=" relative flex flex-col">
        <button
          onClick={handleProfileClick}
          className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 hover:ring-2 hover:ring-amber-500 transition mx-5"
        >
          <img
            className="w-full h-full rounded-full object-cover "
            src={profile}
            alt="profile"
          />
        </button>

        {isClicked && (
          <div className="absolute right-0 top-12 w-52 bg-gray-900 text-gray-200 rounded-xl shadow-xl border border-gray-700 p-2">
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 hover:rounded-xl hover:text-white transition">
              Setting
            </button>

            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 hover:rounded-xl hover:text-white transition">
              Profile
            </button>

            <div className="border-t border-gray-700 my-1"></div>

            <button
              onClick={handlesignOut}
              className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/20 hover:rounded-xl hover:text-red-300 transition"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
