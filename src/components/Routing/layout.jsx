
import { Outlet } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice"

export const Layout = () => {
  const productsInCart = useSelector(cartProducts);

  return (
    <>
      <Header cartCount={productsInCart ? productsInCart.length : 0} />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}