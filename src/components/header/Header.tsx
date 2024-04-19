import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export type HeaderPropsType = {
  login: string | null
  isAuth: boolean
  logout: () => void
}

export const Header = (props: HeaderPropsType) => {
  return (
    <div className={s.header}>
      <img src='https://static.thenounproject.com/png/3096963-200.png' />
      <div className={s.log}>
        {props.isAuth ? (
          <div>{props.login}-<button onClick={props.logout}>LOG OUT</button></div>
        ) : (
          <NavLink to={'/login'}> LOG IN </NavLink>
        )}
      </div>
    </div>
  )
}
