import { useState } from "react"

const EditTask = ({ task, onEdit }) => {
    const [text, setText] = useState('')
    const [deadline, setDeadline] = useState('')
    const [description, setDescription] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmitFunc = (e) => {
        e.preventDefault()
        onEdit({ text, deadline, description, reminder })
        setText('')
        setDescription('')
        setDeadline('')
        setReminder(false)
    }

    return (

        <form className='add-form' onSubmit={onSubmitFunc}>
            <div className='form-control'>
                <label>Rename Task</label>
                <input type='text'
                    value={text} onChange={(e) => { text && setText(e.target.value) }}
                />
            </div>
            <div className='form-control'>
                <label>Change Deadline</label>
                <input type='text'
                    value={deadline} onChange={(e) => { deadline && setDeadline(e.target.value) }}
                />
            </div>
            <div className='form-control'>
                <label>Change Description</label>
                <input type='text'
                    value={description} onChange={(e) => { description && setDescription(e.target.value) }}
                />
            </div>
            <input type='submit'
                className='btn btn-block'
                value='Edit Task'
            />

        </form>
    )
}

export default EditTask
