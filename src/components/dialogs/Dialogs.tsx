import React from 'react'
import { ChangeEvent, FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './dialogItem/DialogItem'
import { Message } from './message/Message'
import { Form } from '../common/Form'
import { MyPostsPropsType } from './DialogsContainer'
import { Redirect } from 'react-router-dom'

export const Dialogs: FC<MyPostsPropsType> = (props) => {
  const sendMessage = () => {
    props.addMessage(props.newMessageText)
  }

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.messageChange(text)
  }
  if (!props.isAuth) return <Redirect to={'/login'} />

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
      <Form
        btnName={'send'}
        newValueText={props.newMessageText}
        onValueChange={onMessageChange}
        onAddValue={sendMessage}
      />
    </div>
  )
}
