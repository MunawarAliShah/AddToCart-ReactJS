import React from "react";
import "./HomeScreen.css";
import ProductCardList from "../ProductCardList/ProductCardList";

const HomeScreen = ({ products, handleClick }) => {
  return (
    <div className="HomeScreen">
      <div className="main-cart-section">
        <h1>Welcome to the Store</h1>
        {/* <p>Total Number of Products are {products.length}</p> */}
        <div class="sale-deal">Sale Upto 30% Off</div>
        <div>
          <ProductCardList products={products} handleClick={handleClick} />
        </div>
        
      </div>
    </div>
  );
};

export default HomeScreen;
