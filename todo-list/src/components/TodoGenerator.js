import '../css/TodoGenerator.css';
import { useRef } from "react";
import { useTodos } from './../hooks/useTodos';

const TodoGenerator = () => {
    const newTodoRef = useRef();
    const { addTodo } = useTodos();

    const onClickAddTodo = async () => {
        const inputTodo = newTodoRef.current.value;
        const newTodo = {
            id: Date.now(),
            text: inputTodo,
            done: false
        };

        if (!inputTodo.trim()) {
            alert("Please add an item.");
            return;
        }
        addTodo(newTodo.text);
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