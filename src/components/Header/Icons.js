import React from "react";
import { Facebook, Instagram } from "@mui/icons-material";
import "./Icons.scss";
import { Link } from "react-scroll";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { handleActive, cartItemsNumber } from "../../redux/features/cartSlice";

const Icons = () => {
  const dispatch = useDispatch();
  const cartNumber = useSelector(cartItemsNumber);
  return (
    <div className="icons-menu">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/valhallageckos/"
      >
        <Instagram />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/ValhallaGeckos"
      >
        <Facebook />
      </a>
      <div className="cart-icon">
        <Link to={"main"} spy={true} smooth={true} offset={-70} duration={500}>
          <ShoppingCartIcon
            className="cart-icon"
            onClick={() => dispatch(handleActive())}
          />
        </Link>
        <p>{cartNumber}</p>
      </div>
    </div>
  );
};

export default Icons;
