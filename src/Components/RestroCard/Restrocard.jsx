import star from "../../Assets/star.png";
import { CDN_LINK as restroImage } from "../../utils/constants.js";

//Restrocard
const RestroCard = (restaurantInfromation) => {
  //Props
  const { name, cuisines, cloudinaryImageId, avgRating, totalRatingsString } =
    restaurantInfromation?.restroCardDetail || {};

  return (
    <div>
      <div className=" font w-[360px] bg-white border border-gray-200 rounded-2xl m-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="relative">
          <span
            className="absolute top-48 right-4 text-white text-xs px-4 py-1 rounded-md 
      bg-gradient-to-r from-violet-600 via-rose-500 to-amber-400 shadow-md font-medium"
          >
            {totalRatingsString} Reviews
          </span>
        </div>

        <div className="w-full overflow-hidden rounded-t-2xl">
          <img
            src={restroImage + cloudinaryImageId}
            alt="restaurant"
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5 space-y-2">
          <h3 className="font-semibold text-xl text-gray-900 truncate">
            {name}
          </h3>

          <p className="text-sm text-gray-500 truncate">
            {cuisines?.join(", ")}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
            <span className=" px-2 py-1 rounded-xl bg-gray-600 text-white text-sm font-mono shadow-md hover:scale-105 active:scale-95 transition">
              ⏱ 30–40 mins
            </span>
            <span>💰 ₹300 for two</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-5 pb-5 ">
          <div
            className="px-3 py-1 rounded-md text-xs font-medium text-white 
      bg-gradient-to-r from-green-500 to-green-600 shadow-sm"
          >
            TOP PICKS
          </div>

          <div
            className="flex items-center gap-1 px-3 py-1 rounded-md 
      bg-gray-900 text-white text-sm font-medium"
          >
            <img src={star} className="w-4 h-4 invert" alt="rating" />
            {avgRating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;
