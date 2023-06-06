import { useDispatch } from "react-redux";
import {
  incrementProductAmount,
  decrementProductAmount,
  removeProduct,
} from "../../stores/cart/cartSlice";
import "./OderedSummeryProduct.css";

function OderedSummeryProduct({ product }) {
  const dispatch = useDispatch();

  console.log(product);

  const handleIncrement = () => {
    dispatch(incrementProductAmount(product));
  };

  const handleDecrement = () => {
    dispatch(decrementProductAmount(product));
  };

  const handleRemove = () => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="summery-card">
      <div className="summery-card__image-container">
        <img
          className="summery-card__image"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="summery-card__product-info">
        <h3 className="summery-card__product-name">{product.name}</h3>
        <p className="summery-card__product-description">
          {product.description}
        </p>
      </div>
      <div className="summery-card__btn-container">
        <div className="summery-card__product-price">{`${product.price}$`}</div>
        <div className="summery-card__product-btn">
          <button disabled={product.amount <= 0} onClick={handleDecrement}>
            -
          </button>
          <span className="summery-card__product-count">{product.amount}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="summery-card__btn-delete" onClick={handleRemove}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default OderedSummeryProduct;
