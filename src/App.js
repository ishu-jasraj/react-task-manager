import './App.css';
import { useState } from 'react';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import SelectedProject from './components/SelectedProject';

export default function App() {
  const [project, setProject] = useState({
    currentProject: undefined,
    projects: []
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
        currentProject: undefined,
        projects: filteredProjects
      }
      )
    })
  }

  function onAddNewTask(task) {
    console.log('adding new task ', task)
  }

  let content = <SelectedProject currProject={project.currentProject} deleteProject={deleteProject} onAddNewTask={onAddNewTask} />;
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
