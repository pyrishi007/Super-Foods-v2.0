import { useEffect } from "react";
import MenuCategoryItems from "./MenuCategoryItems";

const MenuCardCategories = ({ index, data, showItem, setItemIndex }) => {
  //Extractring Data
  const { title, itemCards } = data?.card?.card || {};

  //Event handler
  const handleClick = () => {
    setItemIndex();
  };

  return (
    <div className=" font w-6/12 m-auto px-5 py-3">

      <div
        onClick={handleClick}
        className="flex items-center justify-between cursor-pointer rounded-xl px-4 py-4 my-4 
    bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
      >
        <div className="flex flex-col">

          <p className="font-semibold text-amber-600 text-2xl">
            {title}
            <span className="ml-2 text-xl  font-medium  text-gray-400">
              ({itemCards.length} items)
            </span>
          </p>


          <p className="text-sm text-gray-950 mt-1">
            Browse delicious options from this category
          </p>
        </div>

        <span
          className={`text-gray-500 text-xl transition-transform duration-300 ${
            showItem ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </div>

      {/* BODY */}
      {showItem && (
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-3 shadow-inner">
          <MenuCategoryItems data={itemCards} />
        </div>
      )}
    </div>
  );
};

export default MenuCardCategories;
