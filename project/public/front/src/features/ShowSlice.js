import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
};

const ShowSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        toggle: (state) => {
            state.show = !state.show;
        },
    },
});

export const { toggle } = ShowSlice.actions;
export default ShowSlice.reducer;
