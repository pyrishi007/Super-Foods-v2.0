import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRestrouantsMenu_Api } from "../api/swiggy";

const useRestroMenu = () => {
  const [menuCategories, SetMenuCategories] = useState([]); //Catagories

  const [bannerInfo, setBannerInfo] = useState([]); //Banner

  const [loading, setLoading] = useState(true); //Shimmer Phase

  const { resID } = useParams(); //Restro ID = ResID

  useEffect(() => {
    const fetchAPI = async () => {
      const respose = await fetchRestrouantsMenu_Api(resID); 

      //Banner Data
      const banner = respose?.data?.cards[2]?.card?.card?.info || {};

      //Menu Item Catgories data
      const categories =
        respose?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
        [];

      //Caragories Data
      SetMenuCategories(categories);

      //Banner Data
      setBannerInfo(banner);

      //Shimmer Phase
      setLoading(false);
    };
    
    fetchAPI();
  }, [resID]);

  return {
    loading,
    bannerInfo,
    menuCategories,
  };
};

export default useRestroMenu;
