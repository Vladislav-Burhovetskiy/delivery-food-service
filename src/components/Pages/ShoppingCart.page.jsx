import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import Form from "../Form/Form";
import SubmitButton from "../Button/SubmitButton";
import OderedCards from "../Cards/OderedCards";
import "./ShoppingCart.page.css";

function ShoppingCart() {
  const cart = useSelector(cartProducts);
  return (
    <div className="shopping-cart">
      <div>
        <Form />
        <SubmitButton />
      </div>
      {!cart || cart.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <OderedCards />
      )}
    </div>
  );
}

export default ShoppingCart;
