import Shimmer from "./ShimmerUI/Shimmer.jsx";
import withLabel from "../HOCs/withLabel.jsx";
import RestroCard from "./RestroCard/Restrocard.jsx";
import { Link } from "react-router-dom";
import { useBody } from "../Hooks/useBody.jsx";
import { Search } from "./Search/Search.jsx";
import { status } from "../Hooks/isOnline.jsx";

//RestaurantCard- Body
const Body = () => {
  //Custom Hook - useBody
  const { restro, loading, inputText, handleText, handleSearch, sortByRating } =
    useBody();

  //HOC - withlabel
  const NewRestroCard = withLabel(RestroCard);

  //is_On
  const active = status();

  //TODO : Make a Offline Error Screen
  if (!active) return <h1>Hello</h1>;

  //Shimmer UI
  return loading ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="flex justify-center items-center px-6 lg:px py-16 m-10 lg:m-16 rounded-2xl bg-white  border-gray-200">
        <div className="w-full  flex flex-col items-center text-center gap-6">
          {/* SEARCH BAR */}
          <Search
            prop={{ inputText, handleText, handleSearch, sortByRating }}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center text-right">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 text-center">
          Discover <span className="text-amber-500">Restaurant's</span> near you
        </h1>

        <div className="flex justify-center flex-wrap gap-8 mt-10 px-6">
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
    </div>
  );
};

export default Body;
