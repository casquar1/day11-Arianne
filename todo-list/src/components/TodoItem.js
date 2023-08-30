import '../css/TodoItem.css';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
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
        <div>
            <span className={itemClassName} onClick={handleOnToggle}>{props.todoItem.text}</span>
            <EditOutlined className="edit-icon" />
            <DeleteOutlined className="delete-icon" onClick={handleDeleteItem} />
        </div>
    );
}

export default TodoItem;