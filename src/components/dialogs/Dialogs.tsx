import s from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem'
import { Message } from './message/Message'

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

const messages = [
  { id: 1, text: 'Om' },
  { id: 2, text: 'Ah' },
  { id: 3, text: 'Hum' },
]

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs.map((d) => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((message) => (
          <Message message={message.text} />
        ))}
      </div>
    </div>
  )
}
