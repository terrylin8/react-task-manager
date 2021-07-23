import { FaTimes } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import EditTask from './EditTask'
import { useState } from 'react'

const Task = ({ task, onDelete, onToggle, onEdit }) => {
    const [showEditor, setShowEditor] = useState(false)
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                
                    <FaTimes
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => onDelete(task.id)}
                    />
            </h3>
            <FaPen
                    style={{ float: 'right', color: 'steelblue', cursor: 'pointer' }}
                    onClick={() => setShowEditor(!showEditor)}
                    />
            <p>{task.deadline}</p>
            <div className = 'description'> <p>{task.description}</p></div>
            {showEditor && <EditTask onEdit = {onEdit}/>}
        </div>
        
    )
}

export default Task
