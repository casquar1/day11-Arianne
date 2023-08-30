import '../css/TodoItem.css';
import { useDispatch } from 'react-redux';
import { useTodos } from './../hooks/useTodos';

const TodoItem = (props) => {
    const { toggleTodo, deleteTodo } = useTodos();
    const itemClassName = props.todoItem.done ? "done" : "";

    const handleOnToggle = async () => {
        toggleTodo(props.todoItem.id, props.todoItem);
    }

    const handleDeleteItem = async () => {
        const answer = window.confirm('Are you sure you wish to delete this item?');
        if (answer) {
            deleteTodo(props.todoItem.id);
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