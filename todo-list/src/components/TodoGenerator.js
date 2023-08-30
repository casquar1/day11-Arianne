import '../css/TodoGenerator.css';
import { useState } from "react";
import { useTodos } from './../hooks/useTodos';
import { Button, Input, Space } from 'antd';

const TodoGenerator = () => {
    const [inputTodo, setInputTodo] = useState("");
    const { addTodo } = useTodos();

    const onClickAddTodo = async () => {
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
        setInputTodo("");
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onClickAddTodo();
        }
    }

    return (
        <div>
            <Space.Compact
                style={{
                    width: '100%',
                }}
            >
                <Input placeholder="Add an item..." value={inputTodo} onChange={event => setInputTodo(event.target.value)} onKeyDown={handleKeyDown} />
                <Button type="primary" onClick={onClickAddTodo}>Add</Button>
            </Space.Compact>
        </div>
        // <div className="todo-item-input">
        //     <input type="text" placeholder="Add an item..." ref={newTodoRef} onKeyDown={handleKeyDown} />
        //     <button onClick={onClickAddTodo}>Add</button>
        // </div>
    );
}

export default TodoGenerator;