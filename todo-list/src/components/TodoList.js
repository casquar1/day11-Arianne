import '../css/TodoList.css';
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todoList);

    return (
        <div className="container">
            <div className="todo-container">
                <h1>Todo List</h1>
                <TodoGenerator todos={todos} />
                <TodoGroup todos={todos} />
            </div>
        </div>
    );
}

export default TodoList;