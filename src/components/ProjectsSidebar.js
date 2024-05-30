export default function ProjectsSidebar({ project, onViewSelectedProject, onSelectNewProject }) {
    const { projects } = project;

    return (
        <aside className=" w-1/3 bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-1' onClick={onSelectNewProject}>+ Add Projects</button>
            </div>
            <ul>
                {projects.map((singleProject) => {
                    return <li key={singleProject.id}>
                        <button className="w-full px-2 py-1 text-left rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800" onClick={() => onViewSelectedProject(singleProject)}>{singleProject.title}</button>
                    </li>
                })}
            </ul>
        </aside>
    )
}