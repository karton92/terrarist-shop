import React from "react";
import "./ModalContainer.scss";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/features/cartSlice";

function ModalContainer({
  open,
  handleClose,
  imgSrc,
  name,
  description,
  price,
  quantity,
}) {
  const dispatch = useDispatch();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className="modal-box">
          <img src={imgSrc} alt="" />
          <h3>{name}</h3>
          <div className="text-container">
            <div className="description">
              <p>
                <strong>Opis: </strong>
                {description}
              </p>
            </div>
            <div className="bottom-panel">
              <div className="price-container">
                <p>
                  Cena: <strong>{price} zł</strong>
                </p>
                <button
                  onClick={() =>
                    dispatch(addToCart({ name, imgSrc, quantity, price }))
                  }
                >
                  Do koszyka
                </button>
              </div>
              <CloseIcon onClick={handleClose} />
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalContainer;
