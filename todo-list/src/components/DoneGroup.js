import DoneItem from "./DoneItem";

const DoneGroup = (props) => {
    const todos = props.todos.filter((item) => item.done);

    return todos.map((item) => {
        return <DoneItem key={item.id} todoItem={item} />
    });
}

export default DoneGroup;