import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState, useEffect } from "react"
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import About from "./component/About";
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  const [showAdder, setShowAdder] = useState(false)
  // const [showEditor, setShowEditor] = useState(false)
  const [tasks, setTasks] = useState([])


  //fetch data as soon as page 3000 loads
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //fetch data from json server
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
    return data
  }

  //fetch a single task instaed of a list of tasks
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data
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
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`,
      { method: 'DELETE', })
    setTasks(tasks.filter((task) => task.id !== id))

  }

  //add task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task),
      })

    //data is the newly added task
    const data = await response.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const response = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask),
      })

    const data = await response.json()

    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAdder(!showAdder)}
          showAdd={showAdder}
        />
        <Route path='/' exact render={(props) => (
          <>
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
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
