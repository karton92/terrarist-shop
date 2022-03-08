import React, { useState } from "react";
import "./Store.scss";
import { MenuItems, Items } from "../../utils/Data";
import BannerName from "./BannerName";
import SubMenuContainer from "./SubMenuContainer";
import MenuCard from "./MenuCard";
import ItemCard from "./ItemCard";

function Store() {
  const [view, setView] = useState(false);
  const [active, setActive] = useState(1);
  return (
    <div className="store">
      <div className="main-container">
        <BannerName discount={"100"} more={"#"} />
        <div className="menu-container">
          <div className="menu-cards">
            <SubMenuContainer view={view} setView={setView} />
          </div>
          <div className={`row-container ${view ? "view-row-handler" : ""}`}>
            {MenuItems &&
              MenuItems.map((item) => (
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
          <div className="menu-items-container">
            {Items[active - 1].content.map((item) => (
              <ItemCard
                name={item.name}
                imgSrc={item.imgSrc}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="right-container">
        <h2>Do zapłaty:</h2>
      </div>
    </div>
  );
}

export default Store;
