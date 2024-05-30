import { useState } from "react";

export default function NewTask(onAddNewTask) {
    const [task, setTask] = useState('');
    function handleInputTask(event) {
        setTask(event.target.value);
    }
    return (
        <div className="flex gap-6">
            <input
                type='text'
                className=" w-64 px-2 py-1 bg-stone-200 rounded-sm"
                onChange={(e) => { handleInputTask(e) }}
                value={task}
            />
            <button className="text-stone-600" onClick={() => {
                onAddNewTask(task);
            }}>Add Task</button>
        </div>
    )
}