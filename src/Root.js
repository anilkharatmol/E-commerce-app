import "./App.css";
import React, { useState } from "react";
import {  Container } from "react-bootstrap";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Item from "./Components/Item";
import Navbar from "./Components/Navbar";

export default function Root() {
  const productsArr = [
    {
      id: Math.random().toString(),
      title: "Black shirt",

      price: 1000,

      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/w/x/x/m-srt-001-black-moonvelly-original-imaghzu2jqwfw7ap.jpeg?q=70",
    },

    {
      id: Math.random().toString(),
      title: "Jeans",

      price: 800,

      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/y/h/z/32-11274630-roadster-original-imafpmrerqbhyb6t.jpeg?q=70",
    },

    {
      id: Math.random().toString(),
      title: "Yellow T-shirt",

      price: 400,

      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/jsrtn680/t-shirt/5/t/s/5xl-tshirt400mustard-chkokko-original-imafb9yxkxzgmxa5.jpeg?q=70",
    },

    {
      id: Math.random().toString(),
      title: "White Kurta",

      price: 600,

      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/w/y/2/m-white-kurta-taruncollection-original-imag7h4ghqhwgunw.jpeg?q=70",
    },
  ];

  // const authcxt=useContext(AuthContext);

  const item = productsArr.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      quantity={1}
    ></Item>
  ));

  const [showCart, setShowCart] = useState(false);

  function onShow() {
    setShowCart(true);
  }

  function hideCart() {
    setShowCart(false);
  }


  
  return (
    <CartProvider>
     <Navbar onShow={onShow}/>
      {showCart && <Cart onHide={hideCart} > </Cart>}
      <h1
        style={{
          textAlign: "center",
          fontFamily: "-moz-initial",
          fontWeight: "bold",
          backgroundColor: "grey",
          color: "white",
          fontSize: "150px",
          padding: "40px",
        }}
      >
        The Generics
      </h1>
      <h3 style={{ textAlign: "center" ,fontFamily:'fantasy'}}>Products</h3>
      <Container className="mb-2" >{item}</Container>
      <footer
        style={{
          color: "white",
          backgroundColor: "CaptionText",
          textAlign: "center",
        }}
      >
        <h1>The Generics</h1>
      </footer>
    </CartProvider>
  );
}
