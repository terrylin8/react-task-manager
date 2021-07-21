import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react"
import AddTask from "./component/AddTask";

function App() {
  const [showAdder, setShowAdder] = useState(false)
  // const [showEditor, setShowEditor] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Kaplan MCAT review',
      deadline: 'July 26th',
      description: '30/60 chapters done',
      reminder: true,
    },
    {
      id: 2,
      text: 'AI4BD tasks',
      deadline: 'July 20th',
      description:
        'AI tools for GI cancer clinical trial enrollment & Research for alternative CE agencies ',
      reminder: true,
    },
    {
      id: 3,
      text: 'Finishing React project For med lab',
      deadline: 'July 22th',
      description: 'Thats this project!',
      reminder: false,
    },
  ])

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // //edit task
  // const showEditPanel = (id) => {
  //   let taskid = id
  //   setShowEditor(!showEditor)
  // }

  // const editTask = () => {
  //   console.log()
  // }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('deleted ' + id)
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAdder(!showAdder)}
        showAdd={showAdder}
      />
      {showAdder ? <AddTask onAdd={addTask} /> : <div />}
      {/* {showEditor && <EditTask onEdit={editTask} />} */}
      {tasks.length > 0 ?
        (<Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          // onEdit={showEditPanel}
        />)
        : <h2>No Ongoing Tasks</h2>}
    </div>
  );
}

export default App;
