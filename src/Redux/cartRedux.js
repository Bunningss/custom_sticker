import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total = +state.total + +action.payload.price;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.products.forEach((prod) => {
        if (prod.serial === action.payload.serial) {
          const index = state.products.indexOf(prod);
          if (index > -1) {
            state.products.splice(index, 1);
          }
        }
      });
      state.total = Number((state.total - action.payload.price).toFixed(2));
    },
    clearCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
