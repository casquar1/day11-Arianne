import DoneItem from "./DoneItem";

const DoneGroup = (props) => {
    const todos = props.isDone ? props.todos.filter((item) => item.done) : props.todos;

    return todos.map((item) => {
        return <DoneItem key={item.id} todoItem={item} isDone={props.isDone} />
    });
}

export default DoneGroup;