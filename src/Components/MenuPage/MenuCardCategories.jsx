import MenuCategoryItems from "./MenuCategoryItems";
import { useState } from "react";

const MenuCardCategories = (props) => {
  //Accordions
  const [Accordions, setAccordions] = useState(false);

  //Extractring Data
  const { title, itemCards } = props?.data?.card?.card || {};

  const handleClick = () => {
    setAccordions(!Accordions);
  };

  //testing 
  console.log(title);
  

  return (
    <div className="w-6/12 m-auto px-5 py-2">
      {/* Accordion Header */}
      <div
        onClick={handleClick}
        className="flex items-center justify-between cursor-pointer rounded-lg  px-3 py-2 my-2 border-b-2 border-gray-200 "
      >
        <p className="font-bold text-gray-900 text-2xl">
          {title}
          <span className="ml-2 text-lg font-bold text-gray-700">
            ({itemCards.length})
          </span>
        </p>

        <span
          className={`text-gray-700 transition-transform duration-200 ${
            Accordions ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </div>

      {/* Accordion Body */}
      {Accordions && (
        <div className="bg-white rounded-md">
          <MenuCategoryItems data={itemCards} />
        </div>
      )}
    </div>
  );
};
export default MenuCardCategories;
