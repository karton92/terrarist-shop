import React from "react";
import "./Banner.scss";

const Banner = ({ name, discount, more }) => {
  const currency = "zł";
  return (
    <div className="banner-container">
      <h3>{name}</h3>
      <p>
        Uzyskaj zniżke za każde wydane <span>{`${discount} ${currency}`}</span>{" "}
      </p>
      <a href={more}>Zobacz</a>
    </div>
  );
};

export default Banner;
