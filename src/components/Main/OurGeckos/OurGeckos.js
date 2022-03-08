import React from "react";
import ItemCard from "./ItemCardGeckos";
import "./OurGeckos.scss";
import { Geckos } from "../../utils/Data";

function OurGeckos() {
  return (
    <div className="geckos">
      <h2>Pod naszą opieką są:</h2>
      <div className="geckos-container">
        {Geckos.map((item) => (
          <ItemCard
            name={item.name}
            species={item.species}
            morph={item.morph}
            sex={item.sex}
            imgSrc={item.imgSrc}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default OurGeckos;
