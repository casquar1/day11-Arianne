import '../css/TodoList.css';
import { useState } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todoList = useSelector((state) => state.todo.todoItems);

    return (
        <div className="container">
            <div className="todo-container">
                <h1>Todo List</h1>
                <TodoGenerator todoList={todoList} />
                <TodoGroup todoList={todoList} />
            </div>
        </div>
    );
}

export default TodoList;