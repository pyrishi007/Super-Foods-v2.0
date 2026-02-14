import { Link } from "react-router-dom";

const NoCart = () => {
  return (
    <div className=" m-12 rounded-xl flex flex-col items-center py-10 bg-gray-200">
      <div className="flex m-15 justify-center items-center text-6xl gap-4 font-semibold mb-10">
        <p>Your</p>
        <p className="text-amber-500">Cart is Empty</p>
      </div>

      <div className="w-28 h-28 flex items-center justify-center rounded-full bg-amber-100 text-6xl mb-8 shadow-inner">
        🛒
      </div>

      <p className="text-gray-700 text-center text-[17px] max-w-2xl px-6 leading-relaxed">
        Your cart is currently empty. Start adding your favorite meals and
        they’ll appear here ready for checkout.
      </p>

      <p className="text-gray-500 text-center mt-4 max-w-xl">
        Explore the menu, discover new dishes, and build the perfect order for
        your next meal.
      </p>

      <Link to="/">
        <button className="mt-12 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-white px-10 py-3 rounded-full shadow-lg font-semibold tracking-wide hover:scale-105 hover:shadow-xl transition">
          Explore
        </button>
      </Link>

      <p className="text-xs text-gray-400 mt-6">
        Items you add will appear here instantly.
      </p>
    </div>
  );
};

export default NoCart;
