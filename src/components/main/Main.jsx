import css from './Main.module.css'
import { Outlet } from 'react-router-dom';
import TasksListContainer from '../tasks-list-container/TasksListContainer'

const Main = (props) => {
    const { tasks, handleAddTask, handleMoveTask } = props

    return (
        <main className={css.main}>
            <div className={css.taskList}>
                <TasksListContainer tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            </div>
            <div className={css.taskContent}>
                <Outlet />
            </div>
        </main>
    )
}

export default Main
