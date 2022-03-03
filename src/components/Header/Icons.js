import React from "react";
import { BarChart, Facebook, Instagram } from "@mui/icons-material";
import "./Icons.scss";

function Icons() {
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
      <a href="#">
        <BarChart className="toggle-icon" />
      </a>
    </div>
  );
}

export default Icons;
