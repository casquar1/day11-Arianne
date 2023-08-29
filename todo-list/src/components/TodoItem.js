import { useDispatch } from 'react-redux';
import '../css/TodoItem.css';
import { onToggle, deleteTodoItem } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const handleOnToggle = () => {
        dispatch(onToggle(props.index))
    }

    const handleDeleteItem = () => {
        dispatch(deleteTodoItem(props.index))
    }

    return (
        <div className="todo-item">
            <span className="item" onClick={handleOnToggle}>{props.todoItem}</span>
            <button className="delete-item" onClick={handleDeleteItem}>x</button>
        </div>
    );
}

export default TodoItem;