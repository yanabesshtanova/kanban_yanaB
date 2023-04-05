import css from './TasksList.module.css'
import { TASK_TYPE, TASK_TITLE } from '../../const'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const newId = () => `f${(~~(Math.random()*1e8)).toString(16)}`

const AddNewTask = (props) => {
    const { type, handleAddTask, setIsAdded, setIsNewTask } = props
    const [value, setValue] = useState('')

    const handleClick = () => {
        const newTask = {id: newId(), name: value, description: '', type: type}

        if (value.length > 0) {
            handleAddTask(newTask)
        }
        setIsAdded(false)
        setIsNewTask(false)
    }

    return (
        <div className={css.newTask}>
            <input type='text' autoFocus className={css.item} value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

const MoveTask = (props) => {
    const { type, moveTasks, handleMoveTask, setIsAdded } = props

    const handleChange = (e) => {
        let task = null
        if (e.target.selectedIndex > 0) {
            task = moveTasks[e.target.selectedIndex - 1]
            handleMoveTask(task.id, type)
        }
        setIsAdded(false)
    }

    return (
        <select autoFocus className={css.item + ' ' + css.moveTask} onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}>
            <option selected value></option>
            {moveTasks.map((task) => {
                return <option key={task.id}>{task.name}</option>
            })}
        </select>
    )
}

const TasksList = (props) => {
    const { type, tasks, handleAddTask, handleMoveTask } = props
    const tasksList = tasks[type]

    let disabled = "";
    let moveTasksList = []
    if (type - 1 > -1) {
        moveTasksList = tasks[type - 1]
        disabled = moveTasksList.length > 0 ? "" : "disabled"
    }

    const [isAdded, setIsAdded] = useState(false)
    const [isNewTask, setIsNewTask] = useState(false)
    
    const handleClick = () => {
        setIsAdded(true)

        switch(type) {
            case TASK_TYPE.BACKLOG :
                setIsNewTask(true)
                break
            case TASK_TYPE.READY :
            case TASK_TYPE.IN_PROGRESS :
            case TASK_TYPE.FINISHED :
                setIsNewTask(false)
                break
            default :
        } 
    }

    return (
        <div className={css.list}>
            <nav>
                <h1 className={css.title}>{TASK_TITLE[type]}</h1>
                {tasksList.map(task => 
                    <li key={task.id} className={css.item}>
                        <Link to={`/tasks/${task.id}`}>{task.name}</Link>
                    </li>
                )}
            </nav>
            {!isAdded && <button disabled={disabled} className={css.button} onClick={()=> handleClick()}>+ Add card</button>}
            {isAdded && isNewTask && <AddNewTask 
                                            type={type} 
                                            handleAddTask={handleAddTask}
                                            setIsAdded={setIsAdded} 
                                            setIsNewTask={setIsNewTask} 
                                        />}
            {isAdded && !isNewTask && <MoveTask 
                                            type={type} 
                                            moveTasks={moveTasksList}
                                            handleMoveTask={handleMoveTask}
                                            setIsAdded={setIsAdded}
                                        />}
        </div>
    )
}

export default TasksList