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
        addBooks: (state, action) => {
            state.books.push(action.payload)
        }
    }
})

export const { showBooks, addBooks } = bookSlice.actions;

export default bookSlice.reducer;