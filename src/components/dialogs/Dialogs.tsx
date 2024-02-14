import { FC } from 'react'
import { Dialogprops, MessageType } from '../..'
import s from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem'
import { Message } from './message/Message'

type DialogsProps = {
  dialogs: Dialogprops[]
  messages: MessageType[]
}

export const Dialogs: FC<DialogsProps> = ({ dialogs, messages }) => {
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
