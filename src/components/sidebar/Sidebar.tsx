import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.item}>
        <NavLink to="/Profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
    </div>
  )
}
