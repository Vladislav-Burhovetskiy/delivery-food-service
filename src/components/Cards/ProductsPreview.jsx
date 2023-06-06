import React, { useState, useEffect } from "react";
import ProductPreviewCard from "./ProductPreviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart/cartSlice";
import "./ProductsPreview.css";

function ProductsPreview({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((e) => console.log(e));
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
  };

  console.log(products)

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <Carousel responsive={responsive}>
        {products.length > 0 &&
          filteredProducts.map((product) => {
            return (
              <ProductPreviewCard
                key={product._id}
                product={product}
                onAddProduct={onAddProduct}
              />
            );
          })}
      </Carousel>
    </>
  );
}

export default ProductsPreview;
