import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import ProductContextProvider from "./data/producstData/productContext";
import DetailProduct from './Components/DetailProduct'
import CartContextProvider from "./Components/CartContext";
import Cart from "./Components/Cart";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <ProductContextProvider>
        <CartContextProvider>
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id/:name" element={<DetailProduct />} />
          <Route path="/cart/" element={<Cart />} />
        </Routes>
        </CartContextProvider>
      </ProductContextProvider>



    </div>
  );
}

export default App;
