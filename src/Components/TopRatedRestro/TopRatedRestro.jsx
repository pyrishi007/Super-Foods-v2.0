export const TopRatedRestro = (prop) => {
  const { sortByRating } = prop.prop;
  
  return (
    <>
      <button className="px-12 py-4 rounded-xl bg-gradient-to-r from-gray-600 to-gray-900 text-white font-semibold shadow-md * hover:shadow-xl active:scale-95 transition-all duration-200" onClick={sortByRating}>
        Top Restro
      </button>
    </>
  );
};
