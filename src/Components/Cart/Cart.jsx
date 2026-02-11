import { useSelector } from "react-redux";
import EmptyCart from "./emptyCart";
import ProductCart from "./ProductCart";

const Cart = () => {
  const { emptyCart } = useSelector((store) => store.cart);
  console.log(emptyCart);

  return <div>{emptyCart ? <EmptyCart /> : <ProductCart />}</div>;
};

export default Cart;
