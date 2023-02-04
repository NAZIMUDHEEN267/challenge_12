import { configureStore as createStore } from "@reduxjs/toolkit";
import { reducer } from "./features/item/itemSlice"

const store = createStore({
    reducer
})