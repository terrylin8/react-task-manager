import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [deadline, setDeadline] = useState('')
    const [description, setDescription] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmitFunc = (e) => {
        e.preventDefault()
        
        if(!text){
            alert('Please enter a task')
            return
        }
        onAdd({text,deadline,description,reminder})
        setText('')
        setDescription('')
        setDeadline('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit = {onSubmitFunc}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'
                    value={text} onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Deadline</label>
                <input type='text' placeholder='Add Deadline'
                    value={deadline} onChange={(e) => setDeadline(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type='text' placeholder='Add Description'
                    value={description} onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set as Important?</label>
                <input type='checkbox'
                    value={reminder} 
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type='submit'
                className='btn btn-block'
                value='Save Task'
            />

        </form>
    )
}

export default AddTask
