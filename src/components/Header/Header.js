import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Header = ({ setSection }) => {
  return (
    <header className="header" id="header">
      <Navbar setSection={setSection} />
      <Slider />
    </header>
  );
};

export default Header;
