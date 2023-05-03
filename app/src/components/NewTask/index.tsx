import React from "react";
import * as C from "./styles";

type Props = {
    fncAddTask: (taskName: string) => void;
};

const NewTask = ({ fncAddTask }: Props) => {
    const [newTask, setNewTask] = React.useState("");

    const handleKeyUp = (e: React.KeyboardEvent) => {
        if (e.code === "Enter" && newTask !== "") {
            fncAddTask(newTask);
            setNewTask("");
        }
    };

    return (
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={({ target }) => setNewTask(target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
};

export default NewTask;
