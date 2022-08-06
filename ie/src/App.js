import React from "react";
import "./App.css";
import Navbar from "../src/Components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Informational/Home";
import ContactUs from "./Components/Pages/Informational/ContactUs";
import Locations from "./Components/Pages/Informational/Locations";
import Apparel from "./Components/Pages/Shop/apparel/Apparel";
import Candles from "./Components/Pages/Shop/candles/Candles";
import Detox from "./Components/Pages/Shop/detox/Detox";
import DiscGolf from "./Components/Pages/Shop/discGolf/DiscGolf";
import HomeGoods from "./Components/Pages/Shop/homeGoods/HomeGoods";
import IncenseAromatherapy from "./Components/Pages/Shop/incenseAromatherapy/IncenseAromatherapy";
import Sale from "./Components/Pages/Shop/sale/Sale";
import SmokeShop from "./Components/Pages/Shop/smokeShop/SmokeShop";
import Spiritual from "./Components/Pages/Shop/spiritual/Spiritual";


function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/apparel' element={<Apparel />} />
        <Route path='/candles' element={<Candles />} />
        <Route path='/detox' element={<Detox />} />
        <Route path='/discGolf' element={<DiscGolf />} />
        <Route path='/homeGoods' element={<HomeGoods />} />
        <Route path='/incenseAromatherapy' element={<IncenseAromatherapy />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/smokeShop' element={<SmokeShop />} />
        <Route path='/spiritual' element={<Spiritual />} />
        
        
      </Routes>
    </Router>
    
  );
}

export default App;
