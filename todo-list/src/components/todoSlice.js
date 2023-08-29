import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList = action.payload;
        },
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;