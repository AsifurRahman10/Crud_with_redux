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
        },
        updateBooks: (state, action) => {
            const id = action.payload.id;
            const existingData = state.books.filter(book => book.id === id);
            if (existingData) {
                existingData[0].name = action.payload.name
                existingData[0].author = action.payload.author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        }
    }
})

export const { showBooks, addBooks, deleteBook, updateBooks } = bookSlice.actions;

export default bookSlice.reducer;