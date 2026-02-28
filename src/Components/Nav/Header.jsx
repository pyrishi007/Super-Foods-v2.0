import Navigation from "./Navigation";
import burgerMenu from "../../Assets/BurgerMenu.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { log } from "firebase/firestore/lite/pipelines";

const Header = () => {
  const [isMenuOpen, setMenu] = useState(false);
  const navigate = useNavigate();

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);

  //menu
  const toMenu = (e) => {
    const navigateto = e.currentTarget.textContent.toLowerCase();
    navigate(`/${navigateto === "home" ? "" : navigateto}`);
    closeMenu(false);
  };

  return (
    <>
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 p-5">
        <div className="flex justify-between items-center h-20 px-8">
          {/* LOGO */}
          <span className="text-xl md:text-4xl lg:text-5xl bg-amber-500 font-bold bg-clip-text text-transparent tracking-wide">
            Super Food's
          </span>

          {/* BURGER ICON */}
          <div onClick={openMenu} className="block lg:hidden cursor-pointer">
            <img className="w-10 h-10" src={burgerMenu} alt="menu" />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-6">
            <Navigation />
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[9999] bg-black/30 backdrop-blur-sm"
          onClick={closeMenu}
        >
          <div
            className="absolute right-0 top-0 h-screen w-80
               bg-white shadow-2xl border-l border-gray-200
                 p-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-4xl bg-amber-500 font-bold bg-clip-text text-transparent mb-8 tracking-wide">
              Super Food's
            </span>

            <div className="flex flex-col gap-3 text-lg font-medium">
              <div
                onClick={toMenu}
                className="px-4 py-3 rounded-lg cursor-pointer
          text-gray-700 hover:bg-amber-100 hover:text-amber-600 hover:shadow-lg
          transition-all duration-200"
              >
                Home
              </div>

              <div
                onClick={toMenu}
                className="px-4 py-3 rounded-lg cursor-pointer
          text-gray-700 hover:bg-amber-100 hover:text-amber-600 hover:shadow-lg
          transition-all duration-200"
              >
                Cart
              </div>

              <div
                onClick={toMenu}
                className="px-4 py-3 rounded-lg cursor-pointer
          text-gray-700 hover:bg-amber-100 hover:text-amber-600 hover:shadow-lg
          transition-all duration-200"
              >
                About
              </div>

              <div
                onClick={toMenu}
                className="px-4 py-3 rounded-lg cursor-pointer
          text-gray-700 hover:bg-amber-100 hover:text-amber-600 hover:shadow-lg
          transition-all duration-200"
              >
                Contact
              </div>
            </div>

            <button
              // onClick={toMenu}
              className="mt-auto bg-amber-500 text-white py-3 rounded-lg
        font-semibold shadow-md hover:bg-amber-600
        transition-all duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
