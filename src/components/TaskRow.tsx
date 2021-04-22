import { ITaskRow } from "../interfaces/Tasks";

const TaskRow = ({ task, toggleTask }: ITaskRow) => (
    <tr key={task.name}>
        <td>{task.name}</td>
        <td>
            <input
                type="checkbox"
                checked={task.status}
                onChange={() => toggleTask(task)}
            />
        </td>
    </tr>
);

export default TaskRow;
