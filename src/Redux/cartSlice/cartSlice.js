import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: JSON.parse(localStorage.getItem('cartItems')) || [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
        state.items = state.items.filter((item)=>{
        return item.id != action.payload 
      })
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      localStorage.removeItem("cartItems");
    }, 
  },
});

export const {addItem , removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;
