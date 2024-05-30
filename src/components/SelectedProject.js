import Button from "./Button";

export default function SelectedProject({ currProject, deleteProject }) {
    return (
        <div className="mt-16 w-2/3">
            <header>
                <div className="flex gap-80 mb-2">
                    <h1 className="text-2xl text-stone-600 font-bold">{currProject.title}</h1>
                    <Button onClick={() => deleteProject(currProject.id)}>Delete</Button>
                </div>
                <p className="text-stone-400 mb-4">{currProject.dueDate}</p>
                <p>{currProject.description}</p>
            </header>
            <hr />
            <h2 className="mt-4 uppercase">Tasks</h2>
        </div>
    )
}