import '../css/TodoItem.css';

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <ul>
                <li>{props.todoItem}</li>
            </ul>
        </div>
    );
}

export default TodoItem;