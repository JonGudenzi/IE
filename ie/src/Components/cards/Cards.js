import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Img from "../Pages/Shop/apparel/img/RawHat.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this shit</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Img}
              text="Raw Hat"
              label="$ Price"
              path="/apparel"
            />

            <CardItem
              src={Img}
              text="Raw Hat"
              label="$ Price"
              path="/apparel"
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
