import api from "./api";

export const getTodoItems = () => {
    return api.get("/todos");
}
