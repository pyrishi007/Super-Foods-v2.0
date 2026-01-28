import { useState, useEffect } from "react";
import { fetchRestrouantshApi } from "../api/swiggy.js";

export const useBody = () => {
  //RestroList
  const [restro, setRestro] = useState([]);

  //Original - RestroList
  const [originalRestro, setOriginalRestro] = useState([]);

  //ShimmerUI
  const [loading, setLoading] = useState(true);

  //Search logic
  const [inputText, setInputText] = useState("");
 
  console.log(restro);
  

  //Swiggy API handle
  useEffect(() => {
    const data = async () => {
      const response = await fetchRestrouantshApi();

      const restaurantsGrid =
        response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || {};
      const restaurantList = restaurantsGrid.map((item) => item?.info || {});

      setRestro(restaurantList);
      setOriginalRestro(restaurantList);
      setLoading(false);
    };
    data();
  }, []);


  //Top rated restro
  const sortByRating = () => {
    const filteredRestroData = originalRestro.filter(
      (data) => data.avgRatingString > 4.3
    );

    setRestro(filteredRestroData);
  };


  //search Logic - Input & Search Button
  const handleText = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    const filteredData = originalRestro.filter((eachrestro) => {
      return eachrestro.name.toLowerCase().includes(inputText.toLowerCase());
    });
    setRestro(filteredData);
  };

  return {
    restro,
    originalRestro,
    loading,
    sortByRating,
    inputText,
    handleText,
    handleSearch,
};
};
