import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
}

export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        add: () => {
            
        }
    }
})

export default reservationsSlice.reducer