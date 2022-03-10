import React from "react";
import "./Main.scss";
import Store from "./Store/Store";
import OurGeckos from "./OurGeckos/OurGeckos";
import Informations from "./Informations/Informations";
import AboutUs from "./AboutUs/AboutUs";

function Main({ section, isActive }) {
  const handleMainSection = () => {
    if (section === "shop") return <Store isActive={isActive} />;
    else if (section === "geckos") return <OurGeckos />;
    else if (section === "informations") return <Informations />;
    else if (section === "about") return <AboutUs />;
  };

  return (
    <main className="main" id="main">
      {handleMainSection()}
    </main>
  );
}

export default Main;
