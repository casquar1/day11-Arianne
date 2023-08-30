import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TodoItemDetail = () => {
    const { id } = useParams();
    const todos = useSelector(state => state.todo.todoList.find(item => item.id === id))

    return (
        <div className="todo-detail">
            <h1>Todo Item Detail</h1>
            <div>{todos.id}</div>
            <div>{todos.text}</div>
        </div>
    );
}

export default TodoItemDetail;