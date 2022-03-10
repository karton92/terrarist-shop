import React from "react";
import "./Cart.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "./CartItem";

const Cart = ({ isActive }) => {
  return (
    <div className={`cart ${isActive ? "" : "hide"}`}>
      <div className="cart-header">
        <div className="cart-header-text">
          <ShoppingCartIcon />
          <h2>Mój koszyk:</h2>
        </div>

        <button>Usuń koszyk</button>
      </div>
      <div className="cart-upper-box">
        <div className="cart-items-container">
          <CartItem
            name={"Gekon orzęsiony"}
            imgSrc={
              "https://www.terrariumquest.com/wp-content/uploads/2019/02/lizard-crested-gecko-e1551071333649.jpg"
            }
            quantity={20}
            price={300}
          />
          <CartItem
            name={"Chromatopelma cyaneopubescens cyaneopubescens"}
            imgSrc={
              "https://arent.pl/wp-content/uploads/2020/03/Chromatopelma-cyaneopubescens-13-scaled.jpg"
            }
            quantity={1500}
            price={50}
          />
          <CartItem
            name={"Chromatopelma cyaneopubescens"}
            imgSrc={
              "https://arent.pl/wp-content/uploads/2020/03/Chromatopelma-cyaneopubescens-13-scaled.jpg"
            }
            quantity={3}
            price={50}
          />
          <CartItem
            name={"Chromatopelma cyaneopubescens"}
            imgSrc={
              "https://arent.pl/wp-content/uploads/2020/03/Chromatopelma-cyaneopubescens-13-scaled.jpg"
            }
            quantity={3}
            price={50}
          />
          <CartItem
            name={"Chromatopelma cyaneopubescens"}
            imgSrc={
              "https://arent.pl/wp-content/uploads/2020/03/Chromatopelma-cyaneopubescens-13-scaled.jpg"
            }
            quantity={3}
            price={50}
          />
          <CartItem
            name={"Chromatopelma cyaneopubescens"}
            imgSrc={
              "https://arent.pl/wp-content/uploads/2020/03/Chromatopelma-cyaneopubescens-13-scaled.jpg"
            }
            quantity={3}
            price={50}
          />
        </div>
      </div>
      <div className="cart-summary">
        <div className="cart-summary-text">
          <h2>Łącznie:</h2>
          <p>1250zł</p>
        </div>
        <button>Zapłać</button>
      </div>
    </div>
  );
};

export default Cart;
