import '../css/TodoList.css';
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useSelector } from 'react-redux';

const TodoList = (props) => {
    const todos = useSelector((state) => state.todo.todoList);

    return (
        <div className="container">
            <div className="todo-container">
                <h1>Todo List</h1>
                {!props.isDone && <TodoGenerator />}
                <TodoGroup todos={todos} isDone={props.isDone} />
            </div>
        </div>
    );
}

export default TodoList;