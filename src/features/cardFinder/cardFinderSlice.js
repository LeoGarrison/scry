import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foundCards: [],
}

export const cardFinderSlice = createSlice({
    name: "finder",
    initialState,
    reducers: {
        setFoundCards: (state, action) => {
            state.foundCards = action.payload.foundCards;
        },
    }
})

export const { setFoundCards } = cardFinderSlice.actions;
export default cardFinderSlice.reducer;
