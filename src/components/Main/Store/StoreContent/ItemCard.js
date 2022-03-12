import React, { useState } from "react";
import "./ItemCard.scss";
import { AddRounded } from "@mui/icons-material";
import ModalContainer from "./ModalContainer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/features/cartSlice";

const ItemCard = ({ name, imgSrc, price, description, quantity }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

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
        <AddRounded
          onClick={() => dispatch(addToCart({ name, imgSrc, quantity, price }))}
        />
      </div>
      <ModalContainer
        open={open}
        handleClose={handleClose}
        imgSrc={imgSrc}
        name={name}
        quantity={quantity}
        description={description}
        price={price}
      />
    </div>
  );
};

export default ItemCard;
