import '../css/TodoList.css';
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTodos } from './../hooks/useTodos';

const TodoList = () => {
    const { loadTodos } = useTodos();
    const todos = useSelector((state) => state.todo.todoList);
    useEffect(() => { loadTodos() }, []);

    return (
        <div className="container">
            <div className="todo-container">
                <h1>"Todo List"</h1>
                <TodoGenerator />
                <TodoGroup todos={todos} />
            </div>
        </div>
    );
}

export default TodoList;