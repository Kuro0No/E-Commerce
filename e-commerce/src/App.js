import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import ProductContextProvider from "./data/producstData/productContext";
import DetailProduct from './Components/DetailProduct'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <ProductContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id/:name" element={<DetailProduct />} />
        </Routes>
      </ProductContextProvider>



    </div>
  );
}

export default App;
