// import Todo from "./Components/Todo";

import { useEffect, useState } from "react"
import NewTodoForm from "./Components/NewTodoForm";
import TodoList from "./Components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo && todo.id === id) { // Check if todo is not null before accessing its id property
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => {
        // Check if todo is not null and if its id matches the provided id
        return todo && todo.id !== id;
      });
    });
  }

  return (
    <div className="p-4 flex flex-col items-center self-auto h-screen bg-gray-700 text-white ">
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="mt-4 flex flex-col items-start text-2xl font-bold">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}