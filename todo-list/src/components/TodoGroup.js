import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    const todoItems = props.isDone ? props.todos.filter((item) => item.done) : props.todos;

    return todoItems.map((item) => {
        return <TodoItem key={item.id} todoItem={item} isDone={props.isDone} />
    });
}

export default TodoGroup;