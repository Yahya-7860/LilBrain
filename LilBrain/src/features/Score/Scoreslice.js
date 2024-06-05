import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    star: 0,
};

export const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        addStar: (state, action) => {
            state.star++;
        },
    },
});

export const { addStar } = scoreSlice.actions;

export default scoreSlice.reducer;
