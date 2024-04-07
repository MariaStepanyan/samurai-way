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
import { Redirect } from 'react-router-dom'
import { withAuthRedirect } from '../hoc/withAuthRedirect'

type mapDispatchToPropsType = {
  addMessage: (newMessageText: string) => void
  messageChange: (text: string) => void
}

export type MyPostsPropsType = mapDispatchToPropsType & InitialStateType

export type isAuthType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): InitialStateType => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent)
