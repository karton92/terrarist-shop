import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Header = ({ section, setSection, isActive, setActive }) => {
  return (
    <header className="header" id="header">
      <Navbar
        section={section}
        setSection={setSection}
        isActive={isActive}
        setActive={setActive}
      />
      <Slider />
    </header>
  );
};

export default Header;
