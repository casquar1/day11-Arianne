import { useDispatch } from 'react-redux';
import { deleteTodoItem } from "../api/todoApi";
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined } from "@ant-design/icons";

const DoneItem = (props) => {
    const itemClassName = props.todoItem.done ? "done" : "";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnToggle = async () => {
        navigate("/done/" + props.todoItem.id);
    };

    const handleDeleteItem = async () => {
        const answer = window.confirm('Are you sure you wish to delete this item?');
        if (answer) {
            dispatch(deleteTodoItem(props.todoItem.id));
        }
    };

    return (
        <div>
            <span className={itemClassName} onClick={handleOnToggle}>{props.todoItem.text}</span>
            <DeleteOutlined className="delete-icon" onClick={handleDeleteItem} />
        </div>
    );
}

export default DoneItem;