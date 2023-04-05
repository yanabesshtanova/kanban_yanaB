import css from './Footer.module.css'

const Footer = (props) => {
    const { activeTasks, finishedTasks, nameUser, yearUser } = props

    return (
        <footer className={css.footer}>
            <div className={css.statistics}>
                <div>Active tasks: {activeTasks}</div>
                <div className={css.finished}>Finished tasks: {finishedTasks}</div>
            </div>
            <div>Kanban board by {nameUser}, {yearUser}</div>
        </footer>
    )
}

export default Footer