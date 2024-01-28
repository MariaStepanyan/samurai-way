import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const dialogs = [
  {
    name: 'Dimych',
    id: 1,
  },
  {
    name: 'Andrey',
    id: 2,
  },
  {
    name: 'Viktor',
    id: 3,
  },
  {
    name: 'Sasha',
    id: 4,
  },
  {
    name: 'Valera',
    id: 5,
  },
  {
    name: 'Sveta',
    id: 6,
  },
]

type DialogItemProps = {
  id: number
  name: string
}

const DialogItem = (props: DialogItemProps) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

type MessageProps = {
  message: string
}

const Message = (props: MessageProps) => {
  return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs.map((d) => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </div>
      <div className={s.messages}>
        <Message message={'Om'} />
        <Message message={'A'} />
        <Message message={'Hum'} />
      </div>
    </div>
  )
}
