import Task from "./Task"

//bringing in components in brackets
const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onEdit = {onEdit}
                />
            ))}
        </>
    )
}

export default Tasks