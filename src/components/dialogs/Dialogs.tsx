import React from 'react'
import { ChangeEvent, FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem'
import { Message } from './message/Message'
import { ActionType, RootStateType } from '../../redux/state'
import { addMessageAC, messageChangeAC } from '../../redux/dialogs-reducer'
import { Form } from '../common/Form'

type DialogsProps = {
  state: RootStateType
  dispatch: (action: ActionType) => void
}

export const Dialogs: FC<DialogsProps> = ({ state, dispatch }) => {
  const { dialogs, messages, newMessageText } = state.messagesPage

  const sendMessage = () => {
    dispatch(addMessageAC(newMessageText))
  }

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    dispatch(messageChangeAC(text))
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs.map((d) => (
          <DialogItem img={d.img} key={d.id} name={d.name} id={d.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((message, index) => (
          <Message key={index} message={message.text} />
        ))}
      </div>
      <Form
        btnName={'send'}
        newValueText={newMessageText}
        onValueChange={onMessageChange}
        onAddValue={sendMessage}
      />
    </div>
  )
}
