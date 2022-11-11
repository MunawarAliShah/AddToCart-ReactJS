import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((product) => (ans += product.amount * product.price));
    setPrice(ans.toFixed(2));
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div className="Cart">
      <div className="main-cart-section">
        <h1>Shopping Cart</h1>
        {/* <p>
          Total Number of Products of your cart is {}
          {cart.length === 0 ? "Null" : cart.length}
        </p> */}
        <div className="cart-items">
          {cart.map((product) => (
            <div className="cart_box" key={product.id}>
              <div className="cart_img">
                <img src={product.image} alt="" />
                <p>{product.title}</p>
              </div>
              <div>
                <button onClick={() => handleChange(product, +1)}>+</button>
                <button>{product.amount}</button>
                <button onClick={() => handleChange(product, -1)}>-</button>
              </div>
              <div>
                <span>{product.price}</span>
                <button onClick={() => handleRemove(product.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Total Price: Rs - {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
