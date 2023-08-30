import '../css/TodoItem.css';
import { useDispatch } from 'react-redux';
import { onToggle, deleteTodo } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const itemClassName = props.todoItem.done ? "done" : "";

    const handleOnToggle = () => {
        if (props.isDone) {
            console.log("Go to details page");
        } else {
            dispatch(onToggle(props.todoItem.id))
        }
    }

    const handleDeleteItem = () => {
        const answer = window.confirm('Are you sure you wish to delete this item?');
        if (answer) {
            dispatch(deleteTodo(props.todoItem.id))
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