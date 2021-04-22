import { useEffect, useState } from "react";
import TaskBanner from "./components/TaskBanner";
import TaskCreator from "./components/TaskCreator";
import TaskRow from "./components/TaskRow";
import VisibilityControl from "./components/VisibilityControl";
import { ITask } from "./interfaces/Tasks";

function App() {
    const [userName, setUserName] = useState("kmirojo");
    const [taskItems, setTaskItems] = useState<ITask[]>([
        {
            name: "Task 1",
            status: false,
        },
        {
            name: "Task 2",
            status: false,
        },
        {
            name: "Task 3",
            status: true,
        },
        {
            name: "Task 4",
            status: false,
        },
    ]);

    const [showCompleted, setShowCompleted] = useState(true);

    useEffect(() => {
        const data = localStorage.getItem("task");
        if (data !== null) {
            setTaskItems(JSON.parse(data));
        } else {
            setUserName("Kmirojo Sample");
            setTaskItems([
                {
                    name: "Task 1 example",
                    status: false,
                },
                {
                    name: "Task 2 example",
                    status: false,
                },
                {
                    name: "Task 3 example",
                    status: true,
                },
                {
                    name: "Task 4 example",
                    status: false,
                },
            ]);
            setShowCompleted(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskItems));
    }, [taskItems]);

    const createNewTask = (taskName: string) => {
        if (!taskItems.find((task) => task.name === taskName)) {
            setTaskItems([...taskItems, { name: taskName, status: false }]);
        }
    };

    const toggleTask = (task: ITask) => {
        setTaskItems(
            taskItems.map((t) =>
                t.name === task.name ? { ...t, status: !t.status } : t
            )
        );
    };

    const getTaskTableRows = (doneValue: boolean) =>
        taskItems
            .filter((task) => task.status === doneValue)
            .map((task) => (
                <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
            ));

    return (
        <div className="App">
            <TaskBanner userName={userName} taskItems={taskItems} />

            <TaskCreator createNewTask={createNewTask} />

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>{getTaskTableRows(false)}</tbody>
            </table>

            <div className="bg-secondary-text-white text-center p-2">
                <VisibilityControl
                    description="Completed Task"
                    isChecked={showCompleted}
                    setShowCompleted={(checked: boolean) =>
                        setShowCompleted(checked)
                    }
                />
            </div>

            {showCompleted && (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>{getTaskTableRows(true)}</tbody>
                </table>
            )}
        </div>
    );
}

export default App;
