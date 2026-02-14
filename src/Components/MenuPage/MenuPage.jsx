import RestaurantLoading from "../ShimmerUI/RestroShimmer";
import Banner from "./Banner";
import useRestroMenu from "../../Hooks/useRestroMenu";
import MenuCardCategories from "./MenuCardCategories";
import { useState } from "react";

const MenuPage = () => {
  const { loading, bannerInfo, menuCategories } = useRestroMenu();

  const [showItemIndex, setItemIndex] = useState(null);

  const menuItems = menuCategories.filter(
    (eachCategories) =>
      eachCategories?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  console.log(bannerInfo);
  

  return loading ? (
    <RestaurantLoading prop={bannerInfo} />
  ) : (
    <div className="menu-container px-4 py-12 bg-gray-50 min-h-screen">
      {/* BANNER */}
      <div className="-auto">
        <Banner prop={bannerInfo} />
      </div>

      {/* TITLE SECTION */}
      <div className=" font max-w-5xl flex flex-col items-center mx-auto mt-10 mb-6 px-2">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          <span className="text-amber-500">{bannerInfo.name}</span> Meals
        </h1>

        {/* HERO HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore freshly prepared dishes from {bannerInfo.name}. Browse menu
            categories, discover new flavors, and order your favorites easily.
          </p>
        </div>

        {/* divider */}
        <div className="w-full h-[3px] bg-amber-400 rounded mt-4"></div>
      </div>

      {/* ACCORDION LIST */}
      <div className="mx-auto">
        {menuItems.map((data, index) => {
          const { categoryId } = data?.card?.card || {};

          return (
            <MenuCardCategories
              index={index}
              data={data}
              key={categoryId}
              showItem={index === showItemIndex}
              setItemIndex={() =>
                setItemIndex(index === showItemIndex ? null : index)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
