import '../css/TodoGenerator.css';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const TodoGenerator = () => {
    const newTodoRef = useRef();
    const dispatch = useDispatch();

    const onClickAddTodo = () => {
        const inputTodo = newTodoRef.current.value;
        const newTodo = {
            id: Date.now(),
            text: inputTodo,
            done: false
        };

        if (!inputTodo) {
            alert("Please add an item.");
            return;
        }
        dispatch(addTodo(newTodo));
        newTodoRef.current.value = null;
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onClickAddTodo();
        }
    }

    return (
        <div className="todo-item-input">
            <input type="text" placeholder="Add an item..." ref={newTodoRef} onKeyDown={handleKeyDown} />
            <button onClick={onClickAddTodo}>Add</button>
        </div>
    );
}

export default TodoGenerator;