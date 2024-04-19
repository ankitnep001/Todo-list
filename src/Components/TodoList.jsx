import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    // Check if todos is null or undefined
    if (todos === null || todos === undefined) {
        console.error("Todos are null or undefined");
        return null; // or handle the error as needed
    }

    // Ensure todos is an array and filter out any null values
    const validTodos = Array.isArray(todos) ? todos.filter(todo => todo !== null) : [];

    return (
        <>
            <ul className="flex flex-col mt-2 gap-2">
                {validTodos.length === 0 && <li>No Todo</li>}
                {validTodos.map(todo => {
                    // Check if todo is an object with an id property
                    if (!todo || typeof todo !== 'object' || !('id' in todo)) {
                        console.error("Invalid todo item:", todo);
                        return null; // or handle the error as needed
                    }
                    return (
                        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    );
                })}
            </ul>
        </>
    );
}
