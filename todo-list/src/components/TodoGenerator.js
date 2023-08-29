import '../css/TodoGenerator.css';
import { useRef } from "react";

const TodoGenerator = (props) => {
    const newTodoRef = useRef();

    const onClickAddTodo = () => {
        const newTodo = newTodoRef.current.value;
        if (!newTodo) {
            alert("Please add an item.");
            return;
        }
        props.setNewTodo(newTodo);
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