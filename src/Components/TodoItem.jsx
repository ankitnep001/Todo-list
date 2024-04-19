import React from 'react';
export default function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
    return (
        <>
            <li className="px-2">
                <label htmlFor="" className="flex gap-2">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={e => toggleTodo(id, e.target.checked)}
                    />
                    {title}
                    <button onClick={() => deleteTodo(id)} className=" px-2 border-2 border-red-600 rounded-lg text-red-500">
                        Delete
                    </button>
                </label>
            </li>
        </>
    )
}