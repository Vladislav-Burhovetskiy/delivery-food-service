import PropTypes from "prop-types";
import AddProduct from "./AddProduct";
import "./ProductPreviewCard.css";

function ProductPreviewCard({ product, onAddProduct }) {
  const { name, imageUrl, description, price } = product;

  const addProduct = () => {
    onAddProduct(product);
  };

  return (
    <div className="product-card">
      <img className="product-card__image" src={imageUrl} alt={name} />
      <h2 className="product-card__name">{name}</h2>
      <p className="product-card__description">{description}</p>
      <AddProduct onAddProduct={addProduct} price={price} />
    </div>
  );
}

export default ProductPreviewCard;

ProductPreviewCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // addProduct: PropTypes.func.isRequired,
  }).isRequired,
};
