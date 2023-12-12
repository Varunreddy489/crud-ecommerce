import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shopping";
import ShopContextProvider from './context/shop-context';


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>

      </BrowserRouter>
    </div>
  );
};

export default App;
