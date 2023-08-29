import '../css/TodoItem.css';

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <li>{props.todoItem.text}
                <span>{props.todoItem.done}</span>
                <span><button>x</button></span>
            </li>
        </div>
    );
}

export default TodoItem;