import React from "react";
import "./BannerName.scss";

function BannerName({ name, discount, more }) {
  const currency = "zł";
  return (
    <div className="banner-container">
      <h3>Wiosenne zwierzo-branie!</h3>
      <p>
        Uzyskaj zniżke za każde wydane <span>{`${discount} ${currency}`}</span>{" "}
      </p>
      <a href={more}>Zobacz</a>
    </div>
  );
}

export default BannerName;
