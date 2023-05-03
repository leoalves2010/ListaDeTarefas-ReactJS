import React from "react";
import * as C from "./App.styles";
import { TasksType } from "./types/TasksType";
import TaskItem from "./components/TaskItem";
import NewTask from "./components/NewTask";

const App = () => {
    const [taskList, setTaskList] = React.useState<TasksType[]>([]);

    const handleAddTask = (taskName: string) => {
        let newTaskList = [...taskList];
        newTaskList.push({
            id: taskList.length + 1,
            title: taskName,
            finishedTask: false,
        });
        setTaskList(newTaskList);
    };

    const handleTaskItem = (id: number, isChecked: boolean) => {
        let newTaskList = [...taskList];
        newTaskList.map((task) => {
            if (task.id === id) {
                task.finishedTask = isChecked;
            }
        });
        setTaskList(newTaskList);
    };

    return (
        <C.Container>
            <C.PageArea>
                <C.Header>Lista de Tarefas</C.Header>
                <NewTask fncAddTask={handleAddTask} />
                {taskList.length === 0 && <div>Nenhuma tarefa cadastrada.</div>}
                {taskList.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        fncTaskItem={handleTaskItem}
                    />
                ))}
            </C.PageArea>
        </C.Container>
    );
};

export default App;
