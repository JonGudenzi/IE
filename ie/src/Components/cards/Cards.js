import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
// import Img from "../Pages/Shop/apparel/img/RawHat.jpg";
import EachItem from "../ItemData";

function Cards() {


  return (

<div>
    {EachItem.map((eachItemData, id) => {
      return(

    <div key={id} className="cards">
      {/* <h1>Check out this shit</h1> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src={eachItemData.itemImage}
            path={eachItemData.itemPath}
            text={eachItemData.itemName}
            label={eachItemData.itemPrice}
            />
            
          </ul>
        </div>
      </div>
    </div>
      
  );
    
})}

</div> )
}

export default Cards;
