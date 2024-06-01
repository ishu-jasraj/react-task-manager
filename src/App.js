import './App.css';
import { useState } from 'react';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import SelectedProject from './components/SelectedProject';

export default function App() {
  const [project, setProject] = useState({
    currentProject: undefined,
    projects: [],
    tasks: []
  });

  function handleNewProject() {
    setProject((prevProject) => {
      return {
        ...prevProject,
        currentProject: null
      }
    });
  }

  function saveNewProject(newProject) {
    setProject(prevProject => {
      newProject.id = Math.random();
      return {
        ...prevProject,
        currentProject: undefined,
        projects: [...prevProject.projects, newProject],
      }
    })
  }

  function cancelProject() {
    setProject((prevProject) => {
      return {
        ...prevProject,
        currentProject: undefined
      }
    })
  }

  function selectProject(selectedProject) {
    setProject((prevProject) => {
      return {
        ...prevProject,
        currentProject: selectedProject
      }
    })
  }

  function deleteProject(projectId) {
    setProject((prevProject) => {
      const filteredProjects = prevProject.projects.filter((currProject) => {
        return currProject.id !== projectId
      })
      return ({
        ...prevProject,
        currentProject: undefined,
        projects: filteredProjects
      }
      )
    })
  }

  function onAddNewTask(task) {
    console.log('adding new task ', task)
    const newTask = {
      taskId: Math.random(),
      projectId: project.currentProject.id,
      task: task
    }

    setProject((prevProject) => {
      return (
        {
          ...prevProject,
          tasks: [...prevProject.tasks, newTask]
        }
      )
    })
  }


  let content = <SelectedProject project={project} deleteProject={deleteProject} onAddNewTask={onAddNewTask} />;
  if (project.currentProject === undefined) {
    content = <NoProjectSelected onSelectNewProject={handleNewProject} />
  }
  else if (project.currentProject === null) {
    content = <NewProject onSaveNewProject={saveNewProject} onCancelNewProject={cancelProject} />
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar project={project} onViewSelectedProject={selectProject} onSelectNewProject={handleNewProject} />
      {content}

    </main>
  );
}
