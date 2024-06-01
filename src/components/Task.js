import NewTask from "./NewTask";

export default function Tasks({ onAddNewTask, allTasks, currentProjectId }) {

    let content = <p className="mt-4">There is no task added in this project</p>
    let selectedProjectTasks = allTasks.filter((singleTask) => {
        return singleTask.projectId === currentProjectId;
    });
    if (selectedProjectTasks.length > 0) {
        content = selectedProjectTasks.map(task => { return <li key={task.taskId}>{task.task}</li> })
    }
    return (
        <section className="mt-4">
            <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddNewTask={onAddNewTask} />
            <ul>
                {content}
            </ul>
        </section>
    )
}