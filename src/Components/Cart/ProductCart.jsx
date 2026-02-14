import { useSelector } from "react-redux";

import EachCartProduct from "./EachCartProduct";

const ProductCart = () => {
  const cartItems = useSelector((store) => store.cart.cartItem);

  return (
    <>
                      <div className="min-h-screen m-10 bg-gray-200 rounded flex flex-col items-center">
                        <div className="flex text-6xl gap-4 font-semibold m-16">
                          <p className="font">Your</p>
                          <p className="font text-amber-500">Cart</p>

                          <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-white text-2xl px-6 py-2 rounded-full shadow-md font-semibold">
                              {cartItems.length} item Added
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 font text-center text-[16] max-w-1xl -mt-20 px-6 pb-10 leading-relaxed">
                          <br />
                          Made with ❤️ and care.
                          <br />
                          Enjoy your Meal
                        </p>

                        {cartItems.map((eachCartitem, i) => {
                          return <EachCartProduct prop={eachCartitem} key={i} />;
                        })}

                        <div className="mt-16 mb-10 text-center px-6">
                          <p className="text-gray-500"> 
                            Almost there! Once you're ready, proceed to checkout and enjoy your
                            items.
                          </p>
                          <p className="text-gray-400 text-sm mt-2">
                            Need more items? Keep browsing and add more to your cart anytime.
                          </p>
                        </div>
                      </div>
    </>
  );
};

export default ProductCart;