import { useState } from "react";
import { ITaskCreator } from "../interfaces/Tasks";

const TaskCreator = ({createNewTask}: ITaskCreator) => {
    const [newTaskname, setNewTaskname] = useState("");

    const updateNewTaskValue = (e: any) => {
        setNewTaskname(e.target.value);
    };

    const createTask = () => {
        if (newTaskname.length) {
            createNewTask(newTaskname)
            setNewTaskname("");
        }
    };

    const onSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <form className="my-1" onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                value={newTaskname}
                onChange={updateNewTaskValue}
            />

            <button className="btn btn-primary mt-1" onClick={createTask}>
                Add
            </button>
        </form>
    );
};

export default TaskCreator;
