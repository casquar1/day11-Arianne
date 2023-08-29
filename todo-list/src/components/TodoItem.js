import { useDispatch } from 'react-redux';
import '../css/TodoItem.css';
import { onToggle } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const handleOnToggle = () => {
        dispatch(onToggle(props.index))
    }

    return (
        <div className="todo-item">
            <span className="item" onClick={handleOnToggle}>{props.todoItem}</span>
            <span><button className="delete-item">x</button></span>
        </div>
    );
}

export default TodoItem;