import Button from "./Button";

export default function NoProjectSelected({ onSelectNewProject }) {
    return (
        <div className="w-2/3 mt-16 text-center">
            <h2 className="text-xl text-stone-500 font-bold">No Project Selected</h2>
            <p className="mt-8 text-stone-400 text-md">Select a project or get started with a new one.</p>
            <p className="mt-12">
                <Button onClick={onSelectNewProject}>Create new project</Button>
            </p>
        </div>
    )
}