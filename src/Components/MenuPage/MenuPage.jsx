import Shimmer from "../ShimmerUI/Shimmer";
import Banner from "./Banner";
import useRestroMenu from "../../Hooks/useRestroMenu";
import MenuCardCategories from "./MenuCardCategories";
import { useState } from "react";

const MenuPage = () => {
  const { loading, bannerInfo, menuCategories } = useRestroMenu();

  const [showItemIndex, setItemIndex] = useState(0);

  const menuItems = menuCategories.filter(
    (eachCategories) =>
      eachCategories?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  return loading ? (
    <Shimmer />
  ) : (
    <div className="menu-container px-4 py-10 bg-white">
      <Banner prop={bannerInfo} />
      {menuItems.map((data, index) => {
        //Key
        const { categoryId } = data?.card?.card || {};

        //Controlled component
        return (
          <MenuCardCategories
            index={index}
            data={data}
            key={categoryId}
            showItem={index == showItemIndex && true }
            setItemIndex={() =>
              setItemIndex(index == showItemIndex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default MenuPage;
