import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);
  const myClass = cart ? "in-cart" : " "
  const cartButton = cart ? "Remove From Cart" : "Add to Cart"

  function addItems (){
    setCart(function(cart){
      return !cart
    });
  }

  return (
    <li className={myClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>addItems()}>{cartButton}</button>
    </li>
  );
}

export default Item;
