import '../css/TodoList.css';
import { useState } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const setNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    return (
        <div className="container">
            <div className="todo-container">
                <h1>Todo List</h1>
                <TodoGenerator setNewTodo={setNewTodo} />
                <TodoGroup todos={todos} />
            </div>
        </div>
    );
}

export default TodoList;