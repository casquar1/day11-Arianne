import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    return props.todoList.map((item) => {
        return <TodoItem key={item.id} todoItem={item} />
    });
}

export default TodoGroup;