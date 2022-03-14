import React from 'react';
import './Cart.scss';

// Redux Toolkit
import { useSelector, useDispatch } from 'react-redux';
import {
  cartValue,
  isCartActive,
  resetCart,
  cartSummary,
  handleActive,
  alertCheck,
  closeAlert
} from '../../../../redux/features/cartSlice';

// Material UI
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';
import AlertNotification from '../../../utils/AlertNotification';

const Cart = () => {
  const shoppingCart = useSelector(cartValue);
  const active = useSelector(isCartActive);
  const summary = useSelector(cartSummary);
  const checkAlert = useSelector(alertCheck);
  const dispatch = useDispatch();

  //Alert START
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    dispatch(closeAlert());
  };
  // Alert  STOP

  return (
    <>
      <div className={`cart ${active ? '' : 'hide'}`}>
        <div className="cart-close">
          <CloseIcon onClick={() => dispatch(handleActive())} />
        </div>
        <div className="cart-header">
          <div className="cart-header-text">
            <ShoppingCartIcon />
            <h2>Mój koszyk:</h2>
          </div>

          <button onClick={() => dispatch(resetCart())}>Usuń koszyk</button>
        </div>
        <div className="cart-upper-box">
          <div className="cart-items-container">
            {shoppingCart ? (
              shoppingCart.map((item) => (
                <CartItem
                  key={item.name}
                  name={item.name}
                  imgSrc={item.imgSrc}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))
            ) : (
              <h3>Koszyk jest pusty</h3>
            )}
          </div>
        </div>
        <div className="cart-summary">
          <div className="cart-summary-text">
            <h2>Łącznie:</h2>
            <p>{summary} zł</p>
          </div>
          <div>
            <button onClick={handleClick}>Zapłać</button>
          </div>
        </div>
      </div>
      <AlertNotification
        severity={'warning'}
        text={'Funkcjonalność niedostępna!'}
        handleClose={handleClose}
        open={open}
      />
      <AlertNotification
        severity={'warning'}
        text={
          'W celu zakupienia tak dużej ilości zwierząt lub przedmiotów prosimy o kontakt indywidualny!'
        }
        handleClose={handleClose}
        open={checkAlert}
      />
    </>
  );
};

export default Cart;
