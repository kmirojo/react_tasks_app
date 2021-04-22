export interface ITask {
    name: string;
    status: boolean;
}

export interface ITaskRow {
    task: ITask;
    toggleTask: (task: ITask) => void;
}

export interface ITaskBanner {
    userName: string;
    taskItems: ITask[];
}

export interface ITaskCreator {
    createNewTask(taskName: string): void;
}

export interface IVisibilityControl {
    description: string;
    isChecked: boolean;
    setShowCompleted: (checked: boolean) => void;
}
