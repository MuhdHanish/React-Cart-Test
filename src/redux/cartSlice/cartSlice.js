import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product } = action.payload;
            const productIndex = state.products.findIndex(item => item._id === product._id);
            if (productIndex !== -1) {
                state.products = [
                    ...state.products.slice(0, productIndex),
                    { ...state.products[productIndex], quantity: state.products[productIndex].quantity + 1 },
                    ...state.products.slice(productIndex + 1),
                ];
            } else {
                state.products.push({ ...product, quantity: 1 });
            }
        },
        increaseQty: (state, action) => {
            const { productId } = action.payload;
            const product = state.products.find(product => product._id === productId);
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQty: (state, action) => {
            const { productId } = action.payload;
            const productIndex = state.products.findIndex(item => item._id === productId);
            if (productIndex !== -1) {
                state.products[productIndex].quantity -= 1;
                if (state.products[productIndex].quantity === 0) {
                    state.products.splice(productIndex, 1);
                }
            }
        },
        removeFromCart: (state, action) => {
            const { productId } = action.payload;
            const productIndex = state.products.findIndex(item => item._id === productId);
            if (productIndex !== -1) {
                state.products.splice(productIndex, 1);
            }
        },
    }
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;