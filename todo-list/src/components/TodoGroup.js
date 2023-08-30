import { List } from 'antd';
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    return (
        <div>
            <List
                bordered
                dataSource={props.todos}
                renderItem={(item) => (
                    <List.Item>
                        <TodoItem key={item.id} todoItem={item} />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default TodoGroup;