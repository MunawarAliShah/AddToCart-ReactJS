import React, { useState, useEffect } from "react";
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (product) => {
    // if (cart.indexOf(products) !== -1) return;
    var found = false;
    var cartItems = cart.map((prod) => {
      if (prod.id === product.id) {
        product.amount += 1;
        found = true;
      }
      return prod;
    });
    if (!found) {
      var cartItem = { ...product, amount: 1 };
      cartItems = [...cartItems, cartItem];
    }
    setCart(cartItems);
  };

  const handleChange = (products, d) => {
    const ind = cart.indexOf(products);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <Container fluid>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <HomeScreen handleClick={handleClick} products={products} />
      ) : (
        <Cart
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
          products={products}
        />
      )}
    </Container>
  );
}

export default App;
