import React from "react";
import { SearchRounded, ShoppingCartRounded } from "@mui/icons-material";
import "./Store.scss";

function Store() {
  return (
    <div className="store">
      <h2>Sklep internetowy</h2>
      <div className="input-box">
        <SearchRounded className="search-icon" />
        <input type="text" placeholder="Search..." />

        <div className="shopping-cart">
          <ShoppingCartRounded className="cart" />
          <div className="cart-content">
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
