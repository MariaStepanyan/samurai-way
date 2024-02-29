import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'
import { RootStateType } from '../../redux/state'
import { FC } from 'react'

type SidebarType = {
  state: RootStateType
}

export const Sidebar: FC<SidebarType> = ({ state }) => {
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
      <div>
        <h2 className={s.headerName}>Friends</h2>
        <div className={s.friends}>
          {state.sidebar.friends.map((friend) => (
            <div key ={friend.id}>
              <span className={s.dot}></span>
              <div className={s.friendName}>{friend.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
