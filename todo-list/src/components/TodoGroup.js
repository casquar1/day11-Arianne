import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    return props.todos.map((item) => {
        return <TodoItem key={item.id} todoItem={item.text} done={item.done} />
    });
}

export default TodoGroup;