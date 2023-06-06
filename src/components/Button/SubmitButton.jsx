import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, clearUserInfo } from "../../stores/userInfo/userInfoSlice";
import { getTotalPrice, clearCart } from "../../stores/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import "./SubmitButton.css";

function SubmitButton() {
  const totalPrice = useSelector((state) => getTotalPrice(state.cart));
  const userInfo = useSelector((state) => getUserInfo(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newTotalPrice = totalPrice.payload.products
    .reduce((prev, current) => prev + current.amount * current.price, 0)
    .toFixed(1);

  const totalAmount = totalPrice.payload.products.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const handleSubmit = async () => {
    try {
      const orderItems = totalPrice.payload.products.map((product) => ({
        name: product.name,
        amount: product.amount,
        imageUrl: product.imageUrl,
        price: product.price,
        totalPrice: product.amount * product.price,
        product: product._id,
      }));

      const shippingInfo = {
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
        address: userInfo.address,
      };

      const response = await fetch("http://localhost:8080/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderItems, shippingInfo }),
      });

      const data = await response.json();
      console.log(data);

      dispatch(clearUserInfo());
      dispatch(clearCart());
      navigate("/delivery-food-service/shopping-cart/success/");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form__total-container">
      <div className="form__total">
        <p className="form__total-text">
          Total price: <span>{newTotalPrice}$</span>
        </p>
        <p className="form__total-text">
          Total amount: <span>{totalAmount}</span>
        </p>
      </div>
      <button type="submit" className="form__button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
