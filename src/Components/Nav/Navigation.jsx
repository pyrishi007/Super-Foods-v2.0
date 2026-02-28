import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const Navigation = () => {
  const { length } = useSelector((store) => store.cart.cartItem);

  return (
    <>
      <ul className="flex items-center mx-25 ">
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
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-center w-full text-xl font-bold transition-colors duration-100 ${
                isActive
                  ? "text-orange-600"
                  : "text-gray-800 hover:text-orange-500"
              }`
            }
          >
            <div className="relative inline-flex items-center cursor-pointer">
              <p>Cart</p>

              {length > 0 && (
                <span
                  className="absolute -top-2 -right-3 px-1.5 py-1.5 h-5
                bg-red-500 text-white text-[11px]
                font-bold flex items-center justify-center
                rounded-md shadow-sm"
                >
                  {length}
                </span>
              )}
            </div>
          </NavLink>
        </li>

        <li className="flex-col px-5">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-center w-full text-xl font-bold transition-colors duration-100 ${
                isActive
                  ? "text-orange-600"
                  : "text-gray-800 hover:text-orange-500"
              }`
            }
          >
            <p>Contact</p>
          </NavLink>
        </li>

        <li className="flex-col px-5">
          <NavLink
            to="about"
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
      </ul>

      <Profile />
    </>
  );
};

export default Navigation;
