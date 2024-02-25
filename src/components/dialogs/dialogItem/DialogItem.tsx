import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

type DialogItemProps = {
  id: number
  name: string
  img: string
}

export const DialogItem = (props: DialogItemProps) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <img className={s.dialogAvatar} src ={props.img}/>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}