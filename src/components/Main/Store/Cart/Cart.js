import React from "react";
import "./Cart.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  cartValue,
  isCartActive,
  resetCart,
  cartSummary,
} from "../../../../redux/features/cartSlice";

const Cart = () => {
  const shoppingCart = useSelector(cartValue);
  const active = useSelector(isCartActive);
  const summary = useSelector(cartSummary);
  const dispatch = useDispatch();

  return (
    <div className={`cart ${active ? "" : "hide"}`}>
      <div className="cart-header">
        <div className="cart-header-text">
          <ShoppingCartIcon />
          <h2>Mój koszyk:</h2>
        </div>

        <button onClick={() => dispatch(resetCart())}>Usuń koszyk</button>
      </div>
      <div className="cart-upper-box">
        <div className="cart-items-container">
          {shoppingCart ? (
            shoppingCart.map((item) => (
              <CartItem
                key={item.name}
                name={item.name}
                imgSrc={item.imgSrc}
                quantity={item.quantity}
                price={item.price}
              />
            ))
          ) : (
            <h3>Koszyk jest pusty</h3>
          )}
        </div>
      </div>
      <div className="cart-summary">
        <div className="cart-summary-text">
          <h2>Łącznie:</h2>
          <p>{summary} zł</p>
        </div>
        <button
          onClick={() =>
            alert(
              "Funkcjonalność niedostępna. Będzie realizowana w dalszym etapie."
            )
          }
        >
          Zapłać
        </button>
      </div>
    </div>
  );
};

export default Cart;
