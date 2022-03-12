import React from "react";
import { storeItems } from "../../../utils/Data";
import ItemCard from "./ItemCard";
import "./ItemsContainer.scss";

function ItemsContainer({ active }) {
  return (
    <div className="menu-items-container">
      {storeItems[active - 1].content.map((item) => (
        <ItemCard
          key={item.name}
          name={item.name}
          imgSrc={item.imgSrc}
          price={item.price}
          description={item.description}
          quantity={1}
        />
      ))}
    </div>
  );
}

export default ItemsContainer;
