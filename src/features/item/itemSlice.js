import { createSlice as itemSlice } from "@reduxjs/toolkit";
import { ADD_ITEM_TO_CART, REMOVE_FROM_CART } from "../../constants/index"

const initialState = {
    cartItems: []
}

const { actions, reducer } = itemSlice({
    name: "productItems",
    initialState,
    reducers: {
        ADD_ITEM_TO_CART(state, action){
            state.cartItems.push(action.payload);
        },
        REMOVE_FROM_CART(state, action){

            // item removing function
            const itemRemover = (item) => item.id !== action.payload.id

            state.cartItems = state.cartItems.filter(itemRemover);
        }
    }
});


export { actions, reducer };