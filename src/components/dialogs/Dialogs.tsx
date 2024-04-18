import React from 'react'
import { FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem'
import { Message } from './message/Message'
import { AddMessageFormRedux } from '../common/Form'
import { MyPostsPropsType } from './DialogsContainer'

export type ValuesForm = {
  newBody: string
}

export const Dialogs: FC<MyPostsPropsType> = (props) => {
  const sendMessage = (values: ValuesForm) => {
    props.addMessage(values.newBody)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogs.map((d) => (
          <DialogItem img={d.img} key={d.id} name={d.name} id={d.id} />
        ))}
      </div>
      <div className={s.messages}>
        {props.messages.map((message, index) => (
          <Message key={index} message={message.text} />
        ))}
      </div>
      <AddMessageFormRedux onSubmit={sendMessage} />
    </div>
  )
}
