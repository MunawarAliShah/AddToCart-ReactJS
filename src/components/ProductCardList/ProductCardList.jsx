import React from "react";
import "./ProductCardList.css";
import Container from "react-bootstrap/Container";
import Items from "../Items/Items.jsx";

const ProductCard = ({ products, handleClick }) => {
  return (
    <Container>
      <div className="product-list">
        {products.map((product) => (
          <Items key={product.id} product={product} handleClick={handleClick} />
        ))}
      </div>
    </Container>
  );
};

export default ProductCard;
