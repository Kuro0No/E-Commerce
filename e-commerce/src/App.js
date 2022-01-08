import Navbar from "./Components/Navbar";
import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import { useContext } from "react";
import ProductContextProvider from "./data/producstData/productContext";
import DetailProduct from './Components/DetailProduct'
import CartContextProvider from "./Components/CartContext";
import Cart from "./Components/Cart";
import NavList from "./Components/Products";
import { CartContext } from "./Components/CartContext";

function App() {
  
    
  
  return (
    
    <div className="App">
     

     
        <CartContextProvider>
      <Navbar  />
      <ProductContextProvider>
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id/:name" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<NavList />} />
        </Routes>
      </ProductContextProvider>
        </CartContextProvider>
      


    </div>
    

  );
}

export default App;
