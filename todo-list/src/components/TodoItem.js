import '../css/TodoItem.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, resetTodoItem } from "./todoSlice";
import * as todoApi from "../api/todoApi";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const itemClassName = props.todoItem.done ? "done" : "";

    const handleOnToggle = async () => {
        await todoApi.updateTodoItem(props.todoItem.id, { done: !props.todoItem.done });
        const response = await todoApi.getTodoItems();
        dispatch(resetTodoItem(response.data));
    }

    const handleDeleteItem = async () => {
        const answer = window.confirm('Are you sure you wish to delete this item?');
        if (answer) {
            await todoApi.deleteTodoItem(props.todoItem.id);
            const response = await todoApi.getTodoItems();
            dispatch(resetTodoItem(response.data));
        }
    }

    return (
        <div className="todo-item">
            <span className={itemClassName} onClick={handleOnToggle}>{props.todoItem.text}</span>
            <button className="delete-item" onClick={handleDeleteItem}>X</button>
        </div>
    );
}

export default TodoItem;