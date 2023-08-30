import { useSelector } from "react-redux";
import DoneGroup from "./DoneGroup";
import "../css/TodoList.css";

const DoneList = () => {
    const todos = useSelector((state) => state.todo.todoList);

    return (
        <div className="container">
            <div className="todo-container">
                <h1>"Done Items"</h1>
                <DoneGroup todos={todos} />
            </div>
        </div>
    );
}

export default DoneList;