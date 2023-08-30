import '../css/TodoItem.css';
import { useDispatch } from 'react-redux';
import { onToggle, deleteTodo } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const itemClassName = props.done ? "done" : "";

    const handleOnToggle = () => {
        dispatch(onToggle(props.id))
    }

    const handleDeleteItem = () => {
        const answer = window.confirm('Are you sure you wish to delete this item?');
        if (answer) {
            dispatch(deleteTodo(props.id))
        }
    }

    return (
        <div className="todo-item">
            <span className={itemClassName} onClick={handleOnToggle}>{props.todoItem}</span>
            <button className="delete-item" onClick={handleDeleteItem}>X</button>
        </div>
    );
}

export default TodoItem;