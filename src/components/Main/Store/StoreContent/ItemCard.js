import React from "react";
import "./ItemCard.scss";
// import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";
// import CloseIcon from "@mui/icons-material/Close";
import { AddRounded } from "@mui/icons-material";
import ModalContainer from "./ModalContainer";

const ItemCard = ({ name, imgSrc, price, description }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="item-card">
      <div className="item-img-box">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      <button onClick={handleOpen}>Zobacz</button>
      <div className="price-container">
        <p>
          Cena: <strong>{price} zł</strong>
        </p>
        <AddRounded />
      </div>
      <ModalContainer
        open={open}
        handleClose={handleClose}
        imgSrc={imgSrc}
        name={name}
        description={description}
        price={price}
      />
    </div>
  );
};

export default ItemCard;
