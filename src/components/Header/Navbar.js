import React from "react";
import { BarChart, Facebook, Instagram } from "@mui/icons-material";
import "./Navbar.scss";
import logo from "../../images/logo.png";
import logo2 from "../../images/logo2.png";
import { Link } from "react-scroll";

function Navbar({ setSection }) {
  return (
    <div className="navbar">
      <Link to="header" spy={true} smooth={true} offset={-100} duration={500}>
        <img className="logo" src={logo2} alt="logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSection("shop")}
            >
              Sklep
            </Link>
          </li>
          <li>
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSection("geckos")}
            >
              Nasze gekony
            </Link>
          </li>
          <li>
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSection("informations")}
            >
              Informacje
            </Link>
          </li>
          <li>
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSection("about")}
            >
              O nas
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

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
        {/* <BarChart className="toggle-icon" /> */}
      </div>
    </div>
  );
}

export default Navbar;
