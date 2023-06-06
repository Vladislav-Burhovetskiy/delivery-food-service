import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import OderedSummeryProduct from "./OderedSummeryProduct";

import "./OrderedCards.css";

function OderedCards() {
  const cart = useSelector(cartProducts);

  return (
    <div className="ordered-cards">
      {cart &&
        cart?.map((product, index) => {
          return <OderedSummeryProduct product={product} key={index} />;
        })}
    </div>
  );
}

export default OderedCards;
