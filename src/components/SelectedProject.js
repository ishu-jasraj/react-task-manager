import Button from "./Button";
import Tasks from "./Task";

export default function SelectedProject({ project, deleteProject, onAddNewTask }) {
    const { currentProject, projects, tasks } = project;
    const { title, description, dueDate, id } = currentProject;
    // console.log('selected.js ', onAddNewTask)
    console.log('selected.js typeof ', typeof onAddNewTask)
    return (
        <div className="mt-16 w-2/3">
            <header>
                <div className="flex gap-80 mb-2">
                    <h1 className="text-2xl text-stone-600 font-bold">{title}</h1>
                    <Button onClick={() => deleteProject(id)}>Delete</Button>
                </div>
                <p className="text-stone-400 mb-4">{dueDate}</p>
                <p>{description}</p>
            </header>
            <hr />
            <Tasks currentProjectId={id} allTasks={tasks} onAddNewTask={onAddNewTask} />
        </div>
    )
}