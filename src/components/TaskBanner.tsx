import { ITaskBanner } from "../interfaces/Tasks";

const TaskBanner = ({ userName, taskItems }: ITaskBanner) => {
    const tasksToDo = taskItems.filter((task) => !task.status).length;

    return (
        <h4 className="bg-primary text-white text-center p-4">
            {userName}'s Tasks App ({tasksToDo} tasks to do)
        </h4>
    );
};

export default TaskBanner;
