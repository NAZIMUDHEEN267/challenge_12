import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk('fetch/fetchProducts', async () => {
    const getJson = await axios.get("https://fakestoreapi.com/products");
    const data = await getJson.data;

    return data;
})

const productSlice = createSlice({
    name: "fetch",
    initialState: {
        loading: false,
        data: [],
        error: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.code;
        })
    }
});

export default productSlice.reducer;
export { fetchProducts }