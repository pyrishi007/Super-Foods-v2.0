import star from "../../Assets/star.png";
import { CDN_LINK as restroImage } from "../../utils/constants.jsx";

//Restrocard
const RestroCard = (restaurantInfromation) => {
  //Props
  const { name, cuisines, cloudinaryImageId, avgRating, totalRatingsString } =
    restaurantInfromation?.restroCardDetail || {};

  return (
    <div>
      <div className="w-[360px] border shadow-lg rounded-xl m-10 hover:shadow-xl rounded-xl hover:scale-95 transition-transform duration-200 ">
        <div className=" relative">
          <label
            className="absolute font-mono top-52 -right-3 text-white text-xs px-5 py-1 bg-gradient-to-r from-violet-600 via-rose-500 to-amber-400 rounded-[6px_0px_6px_6px] shadow
  "
          >
            {totalRatingsString} Rating
          </label>
        </div>

        <div className="w-full">
          <img
            src={restroImage + cloudinaryImageId}
            alt="Image not found"
            className="w-full h-60 rounded-lg object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="font-bold  text-xl text-gray-700 truncate">{name}</h3>

          <p className="text-sm font-semibold text-gray-500 truncate">
            {cuisines?.join(", ")}
          </p>
        </div>

        <div className="flex justify-between items-center px-4 pb-3 mt-4">
          <div className="border px-3 py-1 bg-gradient-to-r from-green-600 to-green-700 rounded-md text-xs font-mono text-white">
            TOP PICKS
          </div>

          <div
            className="flex items-center gap-1 px-2 py-1 rounded-md bg-gradient-to-r from-slate-700 to-gray-900
 text-white text-sm font-mono"
          >
            <img src={star} className="w-4 h-4 invert font-mono" alt="rating" />
            {avgRating}
          </div>
        </div>
      </div>
    </div>
  );
};



export default RestroCard;
