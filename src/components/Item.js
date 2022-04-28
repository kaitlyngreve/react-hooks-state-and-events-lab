import React, { useState} from "react";

function Item({ name, category }) {
  const [isAddToCart, setIsAddToCart] = useState(false)

  const handleAddCart = () => {
    setIsAddToCart(isAddToCart => !isAddToCart)
  }

  return (
    <li className={isAddToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAddToCart ? "remove" : "add"} onClick={handleAddCart}>
        {isAddToCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
