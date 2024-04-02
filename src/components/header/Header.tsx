import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export type HeaderPropsType = {
  login: string
  isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {
  return (
    <div className={s.header}>
      <img src='https://static.thenounproject.com/png/3096963-200.png' />
      <div className={s.log}>
        {props.isAuth ? (
          <div>{props.login}</div>
        ) : (
          <NavLink to={'/login'}> LOG IN </NavLink>
        )}
      </div>
    </div>
  )
}
