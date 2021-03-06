import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../components/interface";

// use local storage for not losing state when reload
const storage: Array<CartItem> = JSON.parse(localStorage.getItem('cart') || '[]')
const numbOfProds: number = JSON.parse(localStorage.getItem('numbItems') || '0')
const shippingPrice: number = 15000

//  using this will lost the state when reload
// const storage: Array<CartItem> = []
// const numbOfProds: number = 0
// const shippingPrice: number = 15000

const initialState = {
  cartItems: storage,
  numbOfItems: numbOfProds,
  shipping: shippingPrice
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {

    addToCart: (state, { payload }: PayloadAction<CartItem>) => {
      if (state.cartItems.length === 0) {
        state.cartItems = [payload]
      } else {
        if (state.cartItems.some((item: { id: number; }) => item.id === payload.id)) {
          let indexOfItem = state.cartItems.findIndex((item: { id: number; }) => item.id === payload.id)
          state.cartItems[indexOfItem].quantity = state.cartItems[indexOfItem].quantity + payload.quantity
        } else {
          state.cartItems.push(payload)
        }
      }
      state.numbOfItems += payload.quantity
      localStorage.setItem('cart', JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
      // localStorage.setItem('numbItems', JSON.stringify(state.numbOfItems))
    },

    increase: (state, { payload }: PayloadAction<CartItem>) => {
      let indexOfItem = state.cartItems.findIndex((item: { id: number; }) => item.id === payload.id)
      state.cartItems[indexOfItem].quantity = state.cartItems[indexOfItem].quantity + 1
      state.numbOfItems += 1
      localStorage.setItem('cart', JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
      // localStorage.setItem('numbItems', JSON.stringify(state.numbOfItems))
    },

    reduce: (state, { payload }: PayloadAction<CartItem>) => {
      let indexOfItem = state.cartItems.findIndex((item: { id: number; }) => item.id === payload.id)
      if (state.cartItems[indexOfItem].quantity > 1) {
        state.cartItems[indexOfItem].quantity = state.cartItems[indexOfItem].quantity - 1
        state.numbOfItems -= 1
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
      // localStorage.setItem('numbItems', JSON.stringify(state.numbOfItems))
    },

    removeFromCart: (state, { payload }: PayloadAction<CartItem>) => {
      let indexOfItem = state.cartItems.findIndex((item: { id: number; }) => item.id === payload.id)
      state.numbOfItems -= payload.quantity
      state.cartItems.splice(indexOfItem, 1)
      localStorage.setItem('cart', JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
      // localStorage.setItem('numbItems', JSON.stringify(state.numbOfItems))
    },

  }
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, increase, reduce, removeFromCart } = cartSlice.actions;
