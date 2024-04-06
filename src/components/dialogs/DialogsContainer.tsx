import React from 'react'
import {
  InitialStateType,
  addMessageAC,
  messageChangeAC,
} from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { Dispatch } from 'redux'

type mapDispatchToPropsType = {
  addMessage: (newMessageText: string) => void
  messageChange: (text: string) => void
  
}

export type MyPostsPropsType = mapDispatchToPropsType & InitialStateType & isAuthType

export type isAuthType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): InitialStateType & isAuthType => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addMessage: (newMessageText: string) => {
      dispatch(addMessageAC(newMessageText))
    },
    messageChange: (text: string) => {
      dispatch(messageChangeAC(text))
    },
  }
}

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)
