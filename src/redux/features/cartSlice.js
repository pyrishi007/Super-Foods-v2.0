import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItem: [],
    emptyCart: true,
  },

  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
      state.emptyCart = false;
    },
    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter((eachCartitem) => {
        return eachCartitem.card.info.id !== action.payload;
      });
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
