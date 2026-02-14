import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";

const Footer = () => {
  return (
    <footer className=" font bg-gray-900 text-gray-300 mt-24">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-5 tracking-wide">
            Super <span className="text-amber-400">Food's</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            Fresh meals crafted with quality ingredients and delivered with
            care. Our goal is to bring comfort, taste, and convenience together
            in every order you place.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <img
              src={facebook}
              className="w-9 h-9 p-2 bg-gray-800 rounded-full shadow-sm hover:bg-amber-400 hover:scale-110 transition duration-200"
            />
            <img
              src={instagram}
              className="w-9 h-9 p-2 bg-gray-800 rounded-full shadow-sm hover:bg-amber-400 hover:scale-110 transition duration-200"
            />
            <img
              src={twitter}
              className="w-9 h-9 p-2 bg-gray-800 rounded-full shadow-sm hover:bg-amber-400 hover:scale-110 transition duration-200"
            />
          </div>
        </div>

        {/* WHY US */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 border-b border-amber-400 pb-1 w-fit">
            Why Choose Us
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-amber-400 transition">
              Fresh Ingredients Daily
            </li>
            <li className="hover:text-amber-400 transition">
              Fast & Reliable Delivery
            </li>
            <li className="hover:text-amber-400 transition">
              Home-style Cooking
            </li>
            <li className="hover:text-amber-400 transition">
              Healthy & Nutritious Meals
            </li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 border-b border-amber-400 pb-1 w-fit">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-amber-400 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-amber-400 cursor-pointer transition">
              Menu
            </li>
            <li className="hover:text-amber-400 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-amber-400 cursor-pointer transition">
              Offers
            </li>
            <li className="hover:text-amber-400 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 border-b border-amber-400 pb-1 w-fit">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p className="hover:text-amber-400 transition">
              📞 +91 82108 74695
            </p>
            <p className="hover:text-amber-400 transition">
              ✉️ gorai123n@gmail.com
            </p>
            <p className="hover:text-amber-400 transition">
              📍 Bangalore, India
            </p>
          </div>

          <p className=" text-gray-500 text-xs mt-5 max-w-xs leading-relaxed">
            We aim to deliver every meal fresh, warm, and on time so you can
            enjoy a seamless dining experience from start to finish.
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800"></div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-3">
        <p>
          © {new Date().getFullYear()}
          <span className="text-amber-400 font-medium"> Super Food's</span>. All
          rights reserved.
        </p>

        <p className="text-xs text-gray-600">
          Prices, availability, and offers may change without notice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
