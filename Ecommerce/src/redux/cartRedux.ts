import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "model/Slider";

interface ICartState {
  products: IProduct[];
  quantity: number;
  total: number;
}

/* eslint-disable no-unused-expressions */
const initialState: ICartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.quantity = state.quantity + 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    updateProductFromCart: (state, action: PayloadAction<IProduct>) => {
      const product = state.products.find((x) => x._id === action.payload._id);
      if (product) {
        const index: number = state.products.indexOf(product);
        state.products[index] = action.payload;

        if (action.payload.quantity > product.quantity) {
          state.total += action.payload.price;
        } else {
          state.total -= action.payload.price;
          if (action.payload.quantity === 0) state.quantity -= 1;
        }
      }
    },
  },
});

export const { addProduct, updateProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
