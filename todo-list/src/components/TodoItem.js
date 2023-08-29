import '../css/TodoItem.css';

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            {props.todoItem.text}
            <span>{props.todoItem.done}</span>
            <span><button>x</button></span>
        </div>
    );
}

export default TodoItem;