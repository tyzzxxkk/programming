import TodoItemEmpty from "./TodoItemEmpty";

export default function TodoItem() {
    return (
        <div>
            <ul className="todo__list">
                <TodoItemEmpty />
                <TodoItem />
            </ul>
        </div>
    )
}