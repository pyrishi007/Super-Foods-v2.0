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
      state.emptyCart = false
    },
    
  
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
