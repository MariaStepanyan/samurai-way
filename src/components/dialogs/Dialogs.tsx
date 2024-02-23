import { FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem'
import { Message } from './message/Message'
import { RootStateType } from '../../redux/state'
import React from 'react'

type DialogsProps = {
  state: RootStateType
}

export const Dialogs: FC<DialogsProps> = ({ state }) => {
  const { dialogs, messages } = state.messagesPage

  const newMessageElement: any = React.createRef()

  const sendMassage = () => {
    const text = newMessageElement.current.value
    alert(text)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs.map((d) => (
          <DialogItem key={d.id} name={d.name} id={d.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((message, index) => (
          <Message key={index} message={message.text} />
        ))}
      </div>
      <div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={sendMassage}>send</button>
        </div>
      </div>
    </div>
  )
}
