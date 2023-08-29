import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        onToggle: (state, action) => {
            state.todoList[action.payload].done = !state.todoList[action.payload].done;
        },
    },
});

export const { addTodo, onToggle } = todoSlice.actions;
export default todoSlice.reducer;