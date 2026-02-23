
import TopRatedRestro from "../TopRatedRestro/TopRatedRestro";

export const Search = (prop) => {
  const { inputText, handleText, handleSearch, sortByRating  } = prop.prop;



  return (
    <div className="w-full py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 flex flex-col items-center shadow-xl">
      {/* HEADING */}
      <div className=" font flex  gap-3">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 text-center">
          Find Your 
        </h1>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-amber-500 text-center">
          Favorite
        </h1>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 text-center">
          Food
        </h1>
      </div>

      {/* SUBTEXT */}
      <p className="text-gray-600 text-lg mt-4 max-w-2xl text-center leading-relaxed">
        Discover restaurants near you, explore delicious meals, and order your
        favorite dishes in seconds. Fresh, fast, and made with love.
      </p>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-4 mt-10 w-full max-w-3xl px-4">
        <input
          type="text"
          placeholder="Search nearby restaurants..."
          value={inputText}
          onChange={handleText}
          className="flex-1 h-16 px-6 rounded-2xl border border-gray-200 bg-white shadow-md text-gray-700 placeholder-gray-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300 transition"
        />

        <button
          onClick={handleSearch}
          className="h-16 px-10 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white text-lg font-semibold shadow-md hover:scale-105 active:scale-95 transition"
        >
          Search
        </button>
        <TopRatedRestro sortByRating={sortByRating} />
      </div>

      {/* EXTRA TEXT */}
      <p className="text-sm text-gray-400 mt-6">
        Popular: Pizza • Burger • Biryani • Pasta • Healthy Meals
      </p>
    </div>
  );
};
