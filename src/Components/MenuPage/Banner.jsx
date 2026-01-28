import star from "../../Assets/star.png";
import { CDN_LINK } from "../../utils/constants";

const Banner = (props) => {
  const bannerInfo = props?.prop;

  const {
    cloudinaryImageId,
    name,
    city,
    locality,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = bannerInfo;

  return (
    <div className="flex justify-center">
      <div
        className="flex items-center w-[90%] lg:w-[70%] m-10 p-6 lg:p-10 rounded-2xl bg-gradient-to-r from-purple-100 to-violet-300 shadow-[0_8px_24px_rgba(0,0,0,0.08)]
    "
      >
        <div className="restro-image flex-shrink-0 rounded-xl overflow-hidden shadow-md">
          <img
            src={CDN_LINK + cloudinaryImageId}
            alt={name}
            className="w-72 h-60 object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-6 lg:p-10 ml-6 lg:ml-10 flex-1">
          <h1 className="restro-name text-2xl lg:text-5xl font-extrabold text-slate-900">
            {name}
          </h1>

          <p className="restro-location mt-3 text-base font-normal text-slate-600">
            {city} • {locality}
          </p>

          <p className="mt-3 text-xl text-slate-700 font-semibold">
            {cuisines.join(", ")}
          </p>

          <div className="flex items-center mt-4 text-sm">
            {/* Rating Badge */}
            <div
              className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-gray-900 text-white px-3 py-1 rounded-[6px_6px_6px_0px] shadow-sm shadow-black/30
          "
            >
              <img src={star} alt="star" className="w-3 h-3 invert" />
              <span className="pl-1 font-mono ">{avgRating}</span>
            </div>

            <span className="divider px-5 text-black">|</span>

            <span className="text-sm px-4 py-1 font-mono bg-gradient-to-r from-violet-600 via-rose-500 to-amber-400 rounded-[6px_6px_6px_0px] text-white">
              {totalRatingsString}
            </span>

            <span className="divider px-5 text-black">|</span>

            <span className="text-sm px-4 py-1 font-mono bg-gradient-to-r from-green-600 to-green-700 rounded-[6px_6px_6px_0px]np text-white">
              {costForTwoMessage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
