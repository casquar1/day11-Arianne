import '../App.css';
import { useRef } from "react";

const TodoGenerator = (props) => {
    const newTodoRef = useRef();

    const onClickAddTodo = () => {
        const newTodo = newTodoRef.current.value;
        if (!newTodo) {
            return;
        }
        props.setNewTodo(newTodo);
        newTodoRef.current.value = null;
    }

    return (
        <div className="todo-item-input">
            <input type="text" placeholder="Add an item..." ref={newTodoRef} />
            <button onClick={onClickAddTodo} className="add-item-button">Add</button>
        </div>
    );
}

export default TodoGenerator;