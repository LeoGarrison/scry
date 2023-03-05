import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload.results;
        },
    }
})

export const { setResults } = searchSlice.actions;
export default searchSlice.reducer;
