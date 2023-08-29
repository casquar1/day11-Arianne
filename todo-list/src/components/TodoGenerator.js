import '../css/TodoGenerator.css';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import TodoList from './TodoList';

const TodoGenerator = (props) => {
    const newTodoRef = useRef();
    const dispatch = useDispatch();

    const onClickAddTodo = () => {
        const inputTodo = newTodoRef.current.value;

        if (!inputTodo) {
            alert("Please add an item.");
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: inputTodo,
            done: false
        };
        dispatch(addTodo([...props.todoList, newTodo]));
        newTodoRef.current.value = null;
    }

    return (
        <div className="todo-item-input">
            <input type="text" placeholder="Add an item..." ref={newTodoRef} />
            <button onClick={onClickAddTodo}>Add</button>
        </div>
    );
}

export default TodoGenerator;