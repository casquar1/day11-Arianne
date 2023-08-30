import { Input, Modal } from "antd";
import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const EditFormModal = (props) => {
    const previousTodoText = props.todoItem.text;
    const { updateTodo } = useTodos();
    const [todoText, setTodoText] = useState(previousTodoText);

    const handleOk = () => {
        updateTodo(props.todoItem.id, { text: todoText });
        props.closeModal();
    };

    const handleCancel = () => {
        setTodoText(previousTodoText);
        props.closeModal();
    };

    const updateTextOnChange = (event) => {
        setTodoText(event.target.value);
    };

    return (
        <div>
            <Modal
                title="Edit Todo Item"
                open={props.showModal}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input value={todoText} onChange={updateTextOnChange}></Input>
            </Modal>
        </div>
    );

};

export default EditFormModal