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
        deleteTodoItem: (state, action) => {
            state.todoList.pop(action.payload);
        },
    },
});

export const { addTodo, onToggle, deleteTodoItem } = todoSlice.actions;
export default todoSlice.reducer;