import { CDN_LINK } from "../../utils/constants";

const MenuCategoryItems = (props) => {
  //Testing
  console.log(props);

  return (
    <div>
      {props?.data.map((eachItems) => {
        //Extractring Data
        const { name, price, description, imageId } =
          eachItems?.card?.info || {};

        return (
          <div className="w-12/12 m-auto flex items-center justify-between border-b border-gray-200/70 bg-white p-2 text-left">
            <div className="w-8/12">
              <div className="flex items-baseline">
                <p className="text-lg  font-bold text-gray-900 tracking-wide leading-snug">
                  {name}
                </p>

                <span className="px-2 text-lg font-semibold text-gray-700">
                  - ₹{price / 100}
                </span>
              </div>

              <div className="text-sm font-medium text-gray-500 leading-relaxed">
                {description}
              </div>
            </div>

            {/* Image + Button */}
            <div className="relative shrink-0">
              <img
                className="w-36 h-36 rounded-lg object-cover shadow-sm"
                src={CDN_LINK + imageId}
                alt={name}
              />

              <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 py-1.5 rounded-lg bg-white text-green-700 text-sm font-semibold border border-green-600 shadow-md hover:bg-green-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 font-mono">
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCategoryItems;
