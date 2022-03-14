import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import sectionReducer from './features/sectionSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    section: sectionReducer
  }
});
