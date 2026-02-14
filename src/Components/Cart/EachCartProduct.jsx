import { useDispatch } from "react-redux";
import { CDN_LINK } from "../../utils/constants";
import { removeItem } from "../../redux/features/cartSlice";

const EachCartProduct = (eachCartitem) => {
  const { category, imageId, name, price, defaultPrice, id } =
    eachCartitem.prop.card.info || {};

  const dispatch = useDispatch();

  const HandleRemovefromCart = () => {
    dispatch(removeItem(id));
                    
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl px-6 py-5 flex items-center gap-6 max-w-5xl mx-auto space-y-5 my-2">
      {/* checkbox */}
      <input type="checkbox" className="w-5 h-5 accent-emerald-500" />

      {/* image */}
      <img
        src={CDN_LINK + imageId}
        alt=""
        className="w-32 h-32 rounded-2xl object-cover flex-shrink-0 shadow"
      />

      {/* NAME + CATEGORY */}
      <div className=" font flex flex-col flex-1 min-w-0 ml-5">
        <p className="text-lg font-semibold text-amber-600 break-words leading-tight">
          {name}
        </p>

        <p className="text-sm text-gray-400 break-words">{category}</p>
      </div>

      {/* PRICE */}
      <div className="font flex justify-center items-center font-semibold text-gray-900 mr-5">
        <p className=" text-md font-semibold text-amber-500 mx-1"> $</p>
        <p className=" text-xl text-gray-900">
          {((price || defaultPrice) / 100).toFixed(2)}
        </p>
      </div>

      {/* QUANTITY */}
      <div className="font flex items-center gap-4 bg-amber-500 text-white px-4 py-2 rounded-xl shadow mr-5 ">
        <button className="text-md  font-bold">-</button>
        <span className="font-semibold text-black text-md">1</span>
        <button className="text-md font-bold">+</button>
      </div>

      {/* REMOVE */}
      <button
        onClick={HandleRemovefromCart}
        className="text-md font font-semibold bg-red-500 px-5 py-2 text-white rounded-xl shadow-md cursor-pointer active:scale-110 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default EachCartProduct;
