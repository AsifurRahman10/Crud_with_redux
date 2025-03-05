import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        { id: 1, name: "Sonar Bangla", author: "Asifur Rahman" },
        { id: 2, name: "Ami tomai valobashi", author: "Shomik" },
    ]
}

export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
    }
})

export const { showBooks } = bookSlice.actions;

export default bookSlice.reducer;