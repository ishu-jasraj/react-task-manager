import NewTask from "./NewTask";

export default function Tasks({ onAddNewTask }) {
    return (
        <section className="mt-4">
            <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddNewTask={onAddNewTask} />
            <p className="mt-4">There is no task added in this project</p>
        </section>
    )
}