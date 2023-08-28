import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    return props.todos.map((item, index) => {
        return <TodoItem key={index} todoItem={item} />
    });
}

export default TodoGroup;