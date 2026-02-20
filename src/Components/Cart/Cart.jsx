import { useSelector } from "react-redux";
import NoCart from "./NoCart";

import ProductCart from "./ProductCart";

const Cart = () => {
  const cartLength = useSelector((store) => store.cart.cartItem);
  return <div>{cartLength.length === 0 ? <NoCart /> : <ProductCart />}</div>;
};

export default Cart;
