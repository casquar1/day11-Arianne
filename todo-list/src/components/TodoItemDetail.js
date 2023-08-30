import '../css/Page.css';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TodoItemDetail = () => {
    const { id } = useParams();
    const todos = useSelector(state => state.todo.todoList.find(item => item.id === id))

    return (
        <div className="page">
            <div className="container">
                <div className="detail-container">
                    <h1>Todo Item Detail</h1>
                    <div><h2>ID: {todos.id}</h2></div>
                    <div><h2>Text: {todos.text}</h2></div>
                </div>
            </div>
        </div>
    );
}

export default TodoItemDetail;