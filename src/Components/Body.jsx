import Shimmer from "./ShimmerUI/Shimmer.jsx";
import withLabel from "../HOCs/withLabel.jsx";
import RestroCard from "./RestroCard/Restrocard.jsx";
import { Link } from "react-router-dom";
import { useBody } from "../Hooks/useBody.jsx";
import { Search } from "./Search/Search.jsx";
import { TopRatedRestro } from "./TopRatedRestro/TopRatedRestro.jsx";
import { status } from "../Hooks/isOnline.jsx";


 


//RestaurantCard- Body
const Body = () => {
  //Custom Hook - useBody
  const { restro, loading, sortByRating, inputText, handleText, handleSearch } =
  useBody();
  
  //HOC - withlabel
  const NewRestroCard = withLabel(RestroCard);
  
  //is_On
  const active = status();

  //TODO : Make a Offline Error Screen
  if(!active) return <h1>Hello</h1>



  //Shimmer UI
  return loading ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="flex justify-between items-center gap-6 px-16 py-16 m-16 border bg-gradient-to-r from-orange-100 to-orange-300 rounded-2xl shadow-lg bg-gray-900 backdrop-blur">
        <Search prop={{ inputText, handleText, handleSearch }} />
        <TopRatedRestro prop={{ sortByRating }} />
      </div>

      <div className="flex justify-center flex-wrap">
        {restro.map((eachRestro) => (
          <Link
            to={"/restaurant/Menupage/" + eachRestro.id}
            key={eachRestro.id}
          >
            {eachRestro.avgRating >= 4.5 ? (
              <NewRestroCard restroCardDetail={eachRestro} />
            ) : (
              <RestroCard restroCardDetail={eachRestro} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );

};

export default Body;
