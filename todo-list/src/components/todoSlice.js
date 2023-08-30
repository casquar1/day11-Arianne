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
            const toggledItemIndex = state.todoList.findIndex(todo => todo.id === action.payload);
            state.todoList[toggledItemIndex].done = !state.todoList[toggledItemIndex].done;
        },
        deleteTodo: (state, action) => {
            const toBeDeletedItemIndex = state.todoList.findIndex(todo => todo.id === action.payload);
            state.todoList.splice(toBeDeletedItemIndex, 1);
        },
    },
});

export const { addTodo, onToggle, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;