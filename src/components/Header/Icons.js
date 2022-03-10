import React from "react";
import { BarChart, Facebook, Instagram } from "@mui/icons-material";
import "./Icons.scss";
import { Link } from "react-scroll";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Icons = ({ isActive, setActive }) => {
  return (
    <div className="toggle-menu">
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
      <Link
        to={"main"}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        // onClick={() => setSection("shop")}
      >
        <ShoppingCartIcon
          className="cart-icon"
          onClick={() => setActive(!isActive)}
        />
      </Link>
    </div>
  );
};

export default Icons;
