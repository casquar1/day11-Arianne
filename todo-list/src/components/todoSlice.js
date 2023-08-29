import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoItems: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoItems = action.payload;
        },
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;