import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItem: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      console.log(action.type);
      console.log(action.payload);
    },
  },
});


export const { addToCart } = cartSlice.actions
export default cartSlice.reducer 