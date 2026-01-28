export const Search = (prop) => {
  const { inputText, handleText, handleSearch } = prop.prop;

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search your Near-by Restro"
        value={inputText}
        onChange={handleText}
        className="w-[700px] h-14 px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-500 placeholder-gray-00 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all duration-200"
      />

      <button
        onClick={handleSearch}
        className="px-12 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-md * hover:shadow-xl active:scale-95 transition-all duration-200"
      >
        Search
      </button>
    </div>
  );
};
