import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total = Number((state.total + action.payload.price).toFixed(2));
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.products.forEach((prod) => {
                if (prod.serial === action.payload.serial) {
                    const index = state.products.indexOf(prod)
                    if (index > -1) {
                        state.products.splice(index, 1)
                    };
                };
            });
            state.total = Number((state.total - action.payload.price).toFixed(2))
        },
    }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;