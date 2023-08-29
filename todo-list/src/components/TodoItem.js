import { useDispatch } from 'react-redux';
import '../css/TodoItem.css';
import { onToggle, deleteTodo } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const handleOnToggle = () => {
        dispatch(onToggle(props.index))
    }

    const handleDeleteItem = () => {
        const answer = window.confirm('Are you sure you wish to delete this item?');
        if (answer) {
            dispatch(deleteTodo(props.index))
        }
    }

    return (
        <div className="todo-item">
            <span className={props.done ? "done" : ""} onClick={handleOnToggle}>{props.todoItem}</span>
            <button className="delete-item" onClick={handleDeleteItem}>X</button>
        </div>
    );
}

export default TodoItem;