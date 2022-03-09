import React from "react";
import { storeMenu } from "../../../utils/Data";
import MenuCard from "./MenuCard";
import "./MenuRowContainer.scss";

function MenuRowContainer({ view, setActive, active }) {
  return (
    <div className={`row-container ${view ? "view-row-handler" : ""}`}>
      {storeMenu &&
        storeMenu.map((item) => (
          <MenuCard
            key={item.id}
            imgSrc={item.imgSrc}
            name={item.name}
            id={item.id}
            isActive={item.id === active ? true : false}
            setActive={setActive}
            view={view}
          />
        ))}
    </div>
  );
}

export default MenuRowContainer;
