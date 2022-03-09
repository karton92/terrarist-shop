// import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
// import { Items } from "../../utils/Data";
import "./ItemCardGeckos.scss";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

function ItemCard({ name, imgSrc, species, morph, date, sex }) {
  return (
    <div className="geckos-item-card">
      <div className="geckos-item-img-box">
        <img src={imgSrc} alt="" />
      </div>
      <div className="geckos-info">
        <h2>
          {name}{" "}
          {sex === "female" ? (
            <FemaleIcon style={{ backgroundColor: "rgb(235, 113, 164)" }} />
          ) : (
            <MaleIcon style={{ backgroundColor: "rgb(113, 145, 235)" }} />
          )}
        </h2>
        <p className="morph">{morph}</p>
        <p className="species">{species}</p>
        <p>W hodowli od: {date}</p>
      </div>
      {/* <button>Zobacz</button> */}
    </div>
  );
}

export default ItemCard;
