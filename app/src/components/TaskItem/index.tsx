import React from "react";
import * as C from "./styles";
import { TasksType } from "../../types/TasksType";

type Props = {
    task: TasksType;
    fncTaskItem: (id: number, isChecked: boolean) => void;
};

const TaskItem = ({ task, fncTaskItem }: Props) => {
    return (
        <C.Container done={task.finishedTask}>
            <input
                type="checkbox"
                checked={task.finishedTask}
                onChange={(e) => fncTaskItem(task.id, e.target.checked)}
            />
            <label>
                {task.title} - {task.finishedTask.toString()}
            </label>
        </C.Container>
    );
};

export default TaskItem;
