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
        deleteTodo: (state, action) => {
            state.todoList.splice(action.payload, 1);
        },
    },
});

export const { addTodo, onToggle, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;