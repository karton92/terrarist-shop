import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";
import "./MenuCard.scss";

const MenuCard = ({ imgSrc, name, isActive, view, id, setActive }) => {
  return (
    <div
      onClick={() => setActive(id)}
      className={`menu-card-item ${isActive ? `active` : ``} ${
        view ? "view-menu-handler" : ""
      }`}
    >
      <div className="menu-img-box">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="load-menu">
        <ChevronRightRounded />
      </i>
    </div>
  );
};

export default MenuCard;
