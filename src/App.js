import css from './App.module.css'
import data from './mock-data.json'
import { TASK_TYPE } from './const'
import React, { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {
  const {users, activeUserId} = data
  const activeUser = users.find(user => user.id === activeUserId)

  let tasks = JSON.parse(localStorage.getItem("tasksList"))
  tasks = tasks ? tasks : []
  const [tasksList, setTasksList] = useState(tasks)

  const backlogTasks = tasksList ? tasksList.filter(task => task.type === TASK_TYPE.BACKLOG) : []
  const readyTasks = tasksList ? tasksList.filter(task => task.type === TASK_TYPE.READY) : []
  const inprogressTasks = tasksList ? tasksList.filter(task => task.type === TASK_TYPE.IN_PROGRESS) : []
  const finishedTasks = tasksList ? tasksList.filter(task => task.type === TASK_TYPE.FINISHED) : []

  const handleAddTask = (task) => {
    const newTasksList = [...tasksList, task]
    localStorage.setItem('tasksList', JSON.stringify(newTasksList))
    setTasksList(newTasksList)
  }

  const handleMoveTask = (id, type) => {
    const newTasksList = tasksList.map(task => {
      task.type = task.id === id ? type : task.type 
      return task
    })

    localStorage.setItem('tasksList', JSON.stringify(newTasksList))
    setTasksList(newTasksList)
  }

  return (
    <div className={css.app}>
      <Header />
      <Main 
        tasks={[backlogTasks, readyTasks, inprogressTasks, finishedTasks]}
        handleAddTask={handleAddTask}
        handleMoveTask={handleMoveTask}
      />
      <Footer 
        activeTasks={backlogTasks.length}
        finishedTasks={finishedTasks.length}
        nameUser={activeUser.name}
        yearUser={activeUser.year}
      />
    </div>
  );
}

export default App;
