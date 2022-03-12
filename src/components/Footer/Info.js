import React from "react";
import "./Info.scss";
// ICONS
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Info = () => {
  return (
    <div className="footer-info-container">
      <h2>Znajdź nas!</h2>
      <div className="footer-info-icon">
        <LocationOnOutlinedIcon />
        <p>Kraków, Polska</p>
      </div>
      <div className="footer-info-icon">
        <PhoneAndroidOutlinedIcon />
        <p>660 123 456</p>
      </div>
      <div className="footer-info-icon">
        <EmailOutlinedIcon />
        <p>valhallageckos@gmail.com</p>
      </div>
    </div>
  );
};

export default Info;
