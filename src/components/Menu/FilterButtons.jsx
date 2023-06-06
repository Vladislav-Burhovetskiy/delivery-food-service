import "./FilterButtons.css"

function FilterButtons({ categories, onSelectCategory, selectedCategory }) {
  return (
    <div className="menu_buttons">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category[0].toUpperCase() + category.slice(1)}
        </button>
      ))}
      <button>Recipe Bot</button>
    </div>
  );
}

export default FilterButtons;