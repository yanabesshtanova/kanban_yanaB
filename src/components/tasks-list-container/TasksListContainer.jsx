import React from 'react'
import { TASK_TYPE } from '../../const'
import TasksList from '../tasks-list/TasksList'

const TasksListContainer = (props) => {
    const { tasks, handleAddTask, handleMoveTask } = props

    return (
        <React.Fragment>
            <TasksList type={TASK_TYPE.BACKLOG} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <TasksList type={TASK_TYPE.READY} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <TasksList type={TASK_TYPE.IN_PROGRESS} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <TasksList type={TASK_TYPE.FINISHED} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask}/>
        </React.Fragment>
    )
}

export default TasksListContainer