import { List } from 'antd';
import DoneItem from "./DoneItem";

const DoneGroup = (props) => {
    const todos = props.todos.filter((item) => item.done);

    return (
        <div>
            <List
                bordered
                dataSource={todos}
                renderItem={(item) => (
                    <List.Item>
                        <DoneItem key={item.id} todoItem={item} />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default DoneGroup;