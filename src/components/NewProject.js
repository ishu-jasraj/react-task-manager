import Button from "./Button";
import Input from "./Input";
import React, { useRef } from 'react';
import Modal from "./Modal";

export default function NewProject({ onSaveNewProject, onCancelNewProject }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const errorDialog = useRef();

    function onAdd() {
        const newProject = {
            title: title.current.value.trim(),
            description: description.current.value.trim(),
            dueDate: dueDate.current.value.trim()
        }

        if (newProject.title === '' || newProject.description === '' || newProject.dueDate === '') {
            errorDialog.current.open();
            return;
        }

        onSaveNewProject(newProject);
    }
    return (
        <React.Fragment>
            <Modal ref={errorDialog} buttonCaption='close'>
                <h2 className="text-xl text-stone-700 uppercase text-center font-bold">Invalid Input</h2>
                <p className="text-md mt-3 mb-8 text-stone-600">Please enter all the fields before saving the task</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex gap-4 items-center justify-end my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancelNewProject}>Cancel</button></li>
                    <li><Button onClick={onAdd}>Save</Button></li>
                </menu>
                <div>
                    <Input ref={title} type='text' label='Title' />
                    <Input ref={description} isTextArea type='text' label='Description' />
                    <Input ref={dueDate} type='date' label='Due Date' />
                </div>
            </div>
        </React.Fragment>
    )
}