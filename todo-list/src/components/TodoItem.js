import '../css/TodoItem.css';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useTodos } from './../hooks/useTodos';
import EditFormModal from './EditFormModal';
import { useState } from 'react';

const TodoItem = (props) => {
    const { toggleTodo, deleteTodo } = useTodos();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const itemClassName = props.todoItem.done ? "done" : "";

    const handleOnToggle = async () => {
        toggleTodo(props.todoItem.id, props.todoItem);
    }

    const handleUpdateItem = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleDeleteItem = async () => {
        const answer = window.confirm('Are you sure you wish to delete this item?');
        if (answer) {
            deleteTodo(props.todoItem.id);
        }
    }

    return (
        <div>
            <span className={itemClassName} onClick={handleOnToggle}>{props.todoItem.text}</span>
            <p>
                <EditOutlined onClick={handleUpdateItem} />
                <DeleteOutlined onClick={handleDeleteItem} />
            </p>
            <EditFormModal
                showModal={isModalOpen}
                closeModal={handleUpdateItem}
                todoItem={props.todoItem}
            />
        </div>
    );
}

export default TodoItem;