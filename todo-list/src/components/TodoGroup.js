import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    return props.todos.map((item, index) => {
        return <TodoItem key={item.id} index={index} todoItem={item.text} done={item.done} />
    });
}

export default TodoGroup;