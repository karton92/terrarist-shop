import { createSlice } from "@reduxjs/toolkit";

const maxQnty = 15;
const maxSummary = 25000;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shoppingCart: [],
    isCartActive: false,
    cartItemsNumber: 0,
    cartSummary: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { name, imgSrc, quantity, price } = action.payload;
      const index = state.shoppingCart.findIndex((item) => item.name === name);

      if (index >= 0) {
        if (
          state.shoppingCart[index].quantity >= maxQnty ||
          state.cartSummary >= maxSummary
        ) {
          alert(
            "W celu zakupienia tak dużej ilości produktów lub zwierząt prosimy o indywidualny kontakt mailowy."
          );
          return;
        } else {
          state.shoppingCart[index].quantity += 1;
        }
      } else {
        state.shoppingCart.push({ name, imgSrc, quantity, price });
      }
      state.cartItemsNumber += 1;
      state.cartSummary += price;
    },

    resetCart: (state) => {
      state.shoppingCart = [];
      state.cartItemsNumber = 0;
      state.cartSummary = 0;
    },

    incrementQnty: (state, action) => {
      const { name, price } = action.payload;
      const index = state.shoppingCart.findIndex((item) => item.name === name);
      if (
        state.shoppingCart[index].quantity >= maxQnty ||
        state.cartSummary >= maxSummary
      ) {
        alert(
          "W celu zakupienia tak dużej ilości produktów lub zwierząt prosimy o indywidualny kontakt mailowy."
        );
      } else {
        state.shoppingCart[index].quantity += 1;
        state.cartItemsNumber += 1;
        state.cartSummary += price;
      }
    },

    decrementQnty: (state, action) => {
      const { name, price } = action.payload;
      const index = state.shoppingCart.findIndex((item) => item.name === name);

      if (state.shoppingCart[index].quantity > 1) {
        state.shoppingCart[index].quantity -= 1;
      } else {
        state.shoppingCart.splice(index, 1);
      }
      state.cartSummary -= price;
      state.cartItemsNumber -= 1;
    },

    handleActive: (state) => {
      state.isCartActive = !state.isCartActive;
    },
  },
});

// States
export const cartValue = (state) => state.cart.shoppingCart;
export const isCartActive = (state) => state.cart.isCartActive;
export const cartItemsNumber = (state) => state.cart.cartItemsNumber;
export const cartSummary = (state) => state.cart.cartSummary;

// Action creators are generated for each case reducer function
export const {
  addToCart,
  handleActive,
  resetCart,
  incrementQnty,
  decrementQnty,
} = cartSlice.actions;

export default cartSlice.reducer;
