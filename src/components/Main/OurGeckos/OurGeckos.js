import React from "react";
import ItemCard from "./ItemCardGeckos";
import "./OurGeckos.scss";
import { geckos } from "../../utils/Data";

const OurGeckos = () => {
  return (
    <div className="geckos">
      <h2>Pod naszą opieką są:</h2>
      <div className="geckos-container">
        {geckos.map((item) => (
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
};

export default OurGeckos;
