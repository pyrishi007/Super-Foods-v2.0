import Shimmer from "../ShimmerUI/Shimmer";
import Banner from "./Banner";
import useRestroMenu from "../../Hooks/useRestroMenu";
import MenuCardCategories from "./MenuCardCategories";
import { useState } from "react";

const MenuPage = () => {
  const { loading, bannerInfo, menuCategories } = useRestroMenu();

  const [ showItemIndex, setItemIndex ] = useState(1);

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
        console.log(index);
        
        //Key
        const { categoryId } = data?.card?.card || {};

        //Controlled component
        return (
          <MenuCardCategories
            data={data}
            key={categoryId}
            showItem={(index === showItemIndex  && true ,console.log(index))}
            setItemIndex={() => setItemIndex(index, console.log(index)
            )}
          />
        );
      })}
    </div>
  );  
};

export default MenuPage;
