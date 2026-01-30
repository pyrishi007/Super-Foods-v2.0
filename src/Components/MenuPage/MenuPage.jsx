import Shimmer from "../ShimmerUI/Shimmer";
import Banner from "./Banner";
import useRestroMenu from "../../Hooks/useRestroMenu";
import MenuCardCategories from "./MenuCardCategories";

const MenuPage = () => {
  const { loading, bannerInfo, menuCategories } = useRestroMenu();

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

        return <MenuCardCategories data={data} key={categoryId} />;
      })}
    </div>
  );
};

export default MenuPage;
