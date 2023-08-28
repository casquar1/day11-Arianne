import { useState } from "react";

const TodoGenerator = (props) => {
    const [newTodo, setNewTodo] = useState("");

    const onInputChange = (event) => {
        setNewTodo(event.target.value);
    };

    const onClickAddTodo = () => {
        if (!newTodo) {
            alert("Enter an item.")
        }
        props.setNewTodo(newTodo);
    }

    return (
        <div>
            <input type="text" placeholder="Add an item..." value={newTodo} onChange={onInputChange} />
            <button onClick={onClickAddTodo} className="add-item-button">Add</button>
        </div>
    );
}

export default TodoGenerator;