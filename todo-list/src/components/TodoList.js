import '../css/TodoList.css';
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import * as todoApi from "../api/todoApi";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetTodoItem } from "./todoSlice";

const TodoList = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todoList);
    useEffect(() => {
        async function fetchData() {
            const response = await todoApi.getTodoItems();
            dispatch(resetTodoItem(response.data))
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="todo-container">
                <h1>{props.isDone ? "Done Items" : "Todo List"}</h1>
                {!props.isDone && <TodoGenerator />}
                <TodoGroup todos={todos} isDone={props.isDone} />
            </div>
        </div>
    );
}

export default TodoList;