import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";
import "./SubMenuContainer.scss";

const SubMenuContainer = ({ view, setView }) => {
  return (
    <div className="sub-menu-contianer">
      <h3>Kategorie:</h3>
      <div className="view-all">
        <p>Rozwiń</p>
        <ChevronRightRounded onClick={() => setView(!view)} />
      </div>
    </div>
  );
};

export default SubMenuContainer;
