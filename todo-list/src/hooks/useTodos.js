import * as todoApi from "../api/todoApi";
import { useDispatch } from "react-redux";
import { resetTodoItem } from "../components/todoSlice";

export const useTodos = () => {
    const dispatch = useDispatch();

    const loadTodos = async () => {
        const response = await todoApi.getTodoItems();
        dispatch(resetTodoItem(response.data));
    }

    const addTodo = async (text) => {
        await todoApi.addTodoItem({ text: text });
        loadTodos();
    }

    const toggleTodo = async (id, item) => {
        await todoApi.updateTodoItem(id, { done: !item.done });
        loadTodos();
    }

    const deleteTodo = async (id) => {
        await todoApi.deleteTodoItem(id);
        loadTodos();
    }

    async function updateTodo(id, item) {
        await todoApi.updateTodoItem(id, { text: item.text });
        loadTodos();
    }

    return {
        loadTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        updateTodo
    }
}