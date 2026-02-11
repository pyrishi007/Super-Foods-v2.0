import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { length } = useSelector((store) => store.cart.cartItem);

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
          <Link to="cart">
            <div className="relative inline-flex items-center cursor-pointer">
              <p className="text-xl font-bold text-gray-800 hover:text-orange-500 transition">
                Cart
              </p>

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
        <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
          Login
        </button>
      </Link>
    </>
  );
};

export default Navigation;
