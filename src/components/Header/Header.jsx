import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ cartCount }) {
  return (
    <nav className="header">
      <div className="header__container">
        <div className="header__link-container">
          <NavLink to="/delivery-food-service/" className="header__link">
            Shops
          </NavLink>
          <p className="header__text">|</p>
          <NavLink to="/delivery-food-service/shopping-cart" className="header__link">
            Shopping Cart
          </NavLink>
        </div>
        <div className="header__cart">
          <p>{cartCount}</p>
          <NavLink to="/delivery-food-service/shopping-cart">
            <img src="/public/shopping_cart.svg" alt="Cart" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
