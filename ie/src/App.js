import React from "react";
import "./App.css";
import Navbar from "../src/Components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Pages/Informational/Home";
import ContactUs from "../src/Components/Pages/Informational/ContactUs";
import Locations from "../src/Components/Pages/Informational/Locations";
import Shop from "../src/Components/Pages/Shop/ShopAll";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/contact-us'  element={<ContactUs />} />
        <Route path='/locations'  element={<Locations />} />
        <Route path='/shop'  element={<Shop />} />
      </Routes>
    </Router>
    
  );
}

export default App;
