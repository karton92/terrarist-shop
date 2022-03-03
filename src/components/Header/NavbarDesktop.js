import React from "react";
import "./NavbarDesktop.scss";
import { Link } from "react-scroll";

const NavbarDesktop = ({ section, setSection }) => {
  const navData = [
    {
      title: "Home",
      toWaypoint: "header",
      offsetValue: -100,
      setSectionValue: section,
    },
    {
      title: "Sklep",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "shop",
    },
    {
      title: "Nasze gekony",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "geckos",
    },
    {
      title: "Informacje",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "informations",
    },
    {
      title: "O nas",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "about",
    },
    {
      title: "Kontakt",
      toWaypoint: "footer",
      offsetValue: -70,
      setSectionValue: section,
    },
  ];

  return (
    <nav>
      <ul>
        {navData.map((item) => (
          <li key={item.title}>
            <Link
              to={item.toWaypoint}
              spy={true}
              smooth={true}
              offset={item.offsetValue}
              duration={500}
              onClick={() => setSection(item.setSectionValue)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
