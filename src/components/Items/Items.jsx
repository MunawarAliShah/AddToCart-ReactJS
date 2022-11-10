import React from "react";
import Button from "react-bootstrap/Button";
import "./Items.css";

const Items = ({ product, handleClick }) => {
  return (
    <div className="card-container">
      <img src={product.image} width="180" height="180" alt="image" />
      <h3 style={{ margin: "1rem" }}>{product.title}</h3>
      <h4>{product.price} PKR</h4>
      <Button
        onClick={() => handleClick(product)}
        size="lg"
        className="addToCart"
        variant="primary"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default Items;
