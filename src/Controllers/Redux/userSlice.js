import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: [{}],
    reducers: {
        getUser: (state => {
            state.push({name: "Jerry Garcia"});
            state.push({name: "Trey Anastasio"});
        })
    }
})

export default slice.reducer;

export const {getUser} = slice.actions;