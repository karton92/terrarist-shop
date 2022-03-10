import React from "react";
import "./CartItem.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Divider } from "@mui/material";

function CartItem({ imgSrc, name, quantity, price }) {
  return (
    <>
      <div className="cart-item">
        <img src={imgSrc} alt="" />
        <div className="cart-text">
          <h3>{name}</h3>
          <div className="cart-quantity">
            <RemoveIcon />
            <p className="qty-number">{quantity}</p>
            <AddIcon />
          </div>
        </div>
        <p className="cart-price">{quantity * price} zł</p>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
