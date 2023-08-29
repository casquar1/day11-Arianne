import '../css/TodoItem.css';

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <span>{props.todoItem}</span>
            <span><button className="delete-item">x</button></span>
        </div>
    );
}

export default TodoItem;