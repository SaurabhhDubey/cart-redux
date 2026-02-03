import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart ",

    initialState: {
        shoes: 1,
        tshirt: 1,
        pant: 1,
    },

    reducers: {
        incrementShoes: (state) => {
            state.shoes += 1;
        },
        decrementShoes: (state) => {
            if (state.shoes > 1) state.shoes -= 1;
        },

        incrementTshirt: (state) => {
            state.tshirt += 1;
        },
        decrementTshirt: (state) => {
            if (state.tshirt > 1) state.tshirt -= 1;
        },

        incrementPant: (state) => {
            state.pant += 1;
        },
        decrementPant: (state) => {
            if (state.pant > 1) state.pant -= 1;
        },
    },
});

export const {
    incrementShoes,
    decrementShoes,
    incrementTshirt,
    decrementTshirt,
    incrementPant,
    decrementPant,
} = cartSlice.actions;

export default cartSlice.reducer;