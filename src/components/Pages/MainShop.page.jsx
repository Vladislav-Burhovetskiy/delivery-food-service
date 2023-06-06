import React, { useState } from "react";
// import Header from "../Header/Header";
import ProductPreview from "../Cards/ProductsPreview";
// import MenuFilter from "../Menu/MenuFilter";
import FilterButtons from "../Menu/FilterButtons";
// import Footer from "../Footer/Footer";
import "./MainShop.page.css";
// import { useState, useEffect } from "react";

function MainShop() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["burgers", "pizza", "drinks"];

  const onSelectCategory = (category = "") => {
    setSelectedCategory(category);
  };
  return (
    <div className="main_container">
      <FilterButtons
        categories={categories}
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
      />
      <div className="products-preview__container">
        <ProductPreview selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default MainShop;
