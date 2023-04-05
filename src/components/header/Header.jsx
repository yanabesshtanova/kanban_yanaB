import css from './Header.module.css'
import UserMenu from '../user-menu/UserMenu'

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.title}>Awesome Kanban Board</div>
            <UserMenu />
        </header>
    )
}

export default Header