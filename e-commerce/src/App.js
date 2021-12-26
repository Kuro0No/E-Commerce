import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import ProductContextProvider from "./data/producstData/productContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductContextProvider>
        <Home/>
      </ProductContextProvider>


      
    </div>
  );
}

export default App;
