import { createSlice as itemSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const { actions, reducer } = itemSlice({
    name: "productItems",
    initialState,
    reducers: {
        ADD_ITEM_TO_CART: function(state, action){
            state.cartItems.push(action.payload);
        },
        REMOVE_FROM_CART: function(state, action){

            // item removing function
            const itemRemover = (item) => item.id !== action.payload.id

            state.cartItems = state.cartItems.filter(itemRemover);
        }
    }
});


export default reducer;
export { actions }; 