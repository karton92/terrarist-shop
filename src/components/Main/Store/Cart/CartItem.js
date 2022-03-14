import React from 'react';
import './CartItem.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { incrementQnty, decrementQnty } from '../../../../redux/features/cartSlice';

function CartItem({ imgSrc, name, quantity, price }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-item">
        <img src={imgSrc} alt="" />
        <div className="cart-text">
          <h3>{name}</h3>
          <div className="cart-quantity">
            <RemoveIcon onClick={() => dispatch(decrementQnty({ name, price }))} />
            <p className="qty-number">{quantity}</p>
            <AddIcon onClick={() => dispatch(incrementQnty({ name, price }))} />
          </div>
        </div>
        <p className="cart-price">{quantity * price} zł</p>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
