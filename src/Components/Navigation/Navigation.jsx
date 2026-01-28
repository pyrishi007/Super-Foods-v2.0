import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul className="flex items-center mx-32">
        <li className="flex-col px-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-center w-full text-xl font-bold transition-colors duration-100 ${
                isActive
                  ? "text-orange-600"
                  : "text-gray-800 hover:text-orange-500"
              }`
            }
          >
            <p>Home</p>
          </NavLink>
        </li>

        <li className="flex-col px-5">
          <Link>
            <p className="text-center w-full text-xl font-bold text-gray-800 hover:text-orange-500 transition-colors duration-100">
              Cart
            </p>
          </Link>
        </li>

        <li className="flex-col px-5">
          <Link>
            <p className="text-center w-full text-xl font-bold text-gray-800 hover:text-orange-500 transition-colors duration-100">
              Chat
            </p>
          </Link>
        </li>

        <li className="flex-col px-5">
          <NavLink
            to="About"
            className={({ isActive }) =>
              `text-center w-full text-xl font-bold transition-colors duration-100  ${
                isActive
                  ? "text-orange-600"
                  : "text-gray-800 hover:text-orange-500"
              }`
            }
          >
            <p>About</p>
          </NavLink>
        </li>

        <li className="flex-col px-5">
          <Link>
            <p className="text-center w-full text-xl font-bold text-gray-800 hover:text-orange-500 transition-colors duration-100">
              Offers
            </p>
          </Link>
        </li>
      </ul>

      <Link to="/UserProfile.info" className="flex items-center px-10">
        <p
          className="px-7 py-2 border text-lg border-orange-500 rounded-lg font-bold text-black/60 bg-orange-300 shadow-md hover:shadow-lg hover:bg-orange-400 hover:border-orange-400 hover:scale-105 hover:text-black/80 transition-all duration-200
"
        >
          Profile
        </p>
      </Link>
    </>
  );
};

export default Navigation;
