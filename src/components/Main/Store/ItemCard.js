import React from "react";
// import { Items } from "../../utils/Data";
import "./ItemCard.scss";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import { AddRounded } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 12,
};

function ItemCard({ name, imgSrc, price, description }) {
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
                  <button>Do koszyka</button>
                </div>
                <CloseIcon onClick={handleClose} />
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ItemCard;
