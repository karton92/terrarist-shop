import React from "react";
import { BarChart, Facebook, Instagram } from "@mui/icons-material";
import "./Navbar.scss";
import logo2 from "../../images/logo2.png";
import { Link } from "react-scroll";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = ({ section, setSection }) => {
  return (
    <div className="navbar">
      <Link to="header" spy={true} smooth={true} offset={-100} duration={500}>
        <img className="logo" src={logo2} alt="logo" />
      </Link>

      <NavbarDesktop section={section} setSection={setSection} />

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
        <a href="#">
          <BarChart className="toggle-icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
