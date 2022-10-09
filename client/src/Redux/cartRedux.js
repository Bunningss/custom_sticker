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
            state.total += action.payload.price;
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.products.forEach((prod) => {
                if (prod._id === action.payload.id) {
                    const index = state.products.indexOf(prod)
                    console.log(index)
                    if (index > -1) {
                        state.products.splice(index, 1)
                    };
                };
            });
        },
    }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;