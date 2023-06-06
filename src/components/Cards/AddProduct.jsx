import "./AddProduct.css";

function AddProduct({ onAddProduct, price }) {
  return (
    <button className="product-card__button" onClick={onAddProduct}>
      Add to Cart:
      <span className="product-card__button-price">
        {" "}
        $ {Math.floor(price)}
      </span>
    </button>
  )
}

export default AddProduct;