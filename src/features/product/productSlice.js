import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { 
    FETCHING_DATA,
    DATA_FETCHED,
    ERROR_OCCURRED
} from "../../constants/index";

const fetchProducts = createAsyncThunk('fetch/fetchProducts', () => {
    return axios.get("https://fakestoreapi.com/products")
    .then(json => json.data)
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