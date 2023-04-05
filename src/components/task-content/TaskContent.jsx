import css from './TaskContent.module.css'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const TaskContent = () => {
    const params = useParams()
    
    const tasksList = JSON.parse(localStorage.getItem("tasksList"))
    const task = tasksList.find((task) => task.id === params.taskId)

    const [description, setDescription] = useState(task && task.description.length > 0 ? task.description : 'This task has no description')

    const handleFocus = () => {
        if (description === 'This task has no description') {
            setDescription('')
        }
    }

    const handleClick = () => {
        const newTasksList = tasksList.map(t => {
            if (t.id === task.id) {
                t.description = description === 'This task has no description' ? '' : description
            }
            return t
        })
        localStorage.setItem('tasksList', JSON.stringify(newTasksList))
    }

    if (!task) {
        return (
            <div className={css.content}>
                <Link to='/'>
                    <div className={css.exit}>
                        <div className={css.exitLine1}></div>
                        <div className={css.exitLine2}></div>
                    </div>
                </Link>
            <div className={css.name}>There's nothing never!</div>
        </div>
        )
    }

    return (
        <div className={css.content}>
            <Link to='/' onClick={handleClick}>
                <div className={css.exit}>
                    <div className={css.exitLine1}></div>
                    <div className={css.exitLine2}></div>
                </div>
            </Link>
            <div className={css.name}>{task.name}</div>
            <textarea className={css.description} value={description} onChange={(e) => setDescription(e.target.value)} onFocus={() => handleFocus()} />
        </div>
    )
}

export default TaskContent