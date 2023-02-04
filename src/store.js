import { configureStore as createStore } from "@reduxjs/toolkit";
import itemReducer from "./features/item/itemSlice";
import productReducer from "./features/product/productSlice"

const store = createStore({
    reducer: {
        item: itemReducer,
        product: productReducer
    }
})

export default store;