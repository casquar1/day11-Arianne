import '../css/TodoList.css';
import { useState } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useSelector } from 'react-redux';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const todoList = useSelector((state) => state.todo.todoItems);

    const setNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    return (
        <div className="container">
            <div className="todo-container">
                <h1>Todo List</h1>
                <TodoGenerator todoList={todoList} />
                <TodoGroup todos={todos} />
            </div>
        </div>
    );
}

export default TodoList;