import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {

    const [newtask, setNewTask] = useState("");
    function handleSubmit(e) {
        e.preventDefault()

        if (newtask === "") return
        onSubmit(newtask)

        setNewTask("")
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md w-full flex justify-center flex-col gap-3 rounded-xl " action="">
                <div className="flex flex-col ">
                    <label htmlFor="item" className="w-full text-2xl">
                        New Task
                    </label>
                    <input
                        value={newtask}
                        onChange={e => setNewTask(e.target.value)}
                        type="text"
                        className=" text-black mt-1  rounded-lg px-2 bg-gray-200 w-full" />
                </div>
                <button className="flex justify-center items-center w-full rounded-lg border-2 border-black hover:bg-green-400 hover:border-green-400 ">
                    Add
                </button>
            </form>
        </>
    );
}