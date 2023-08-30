import api from "./api";

export const getTodoItems = () => {
    return api.get("/todos");
}

export const updateTodoItem = (id, todoItem) => {
    return api.put(`/todos/${id}`, todoItem);
}

export const deleteTodoItem = (id) => {
    return api.delete(`/todos/${id}`);
}

export const addTodoItem = (newTodo) => {
    return api.post("/todos", newTodo);
}