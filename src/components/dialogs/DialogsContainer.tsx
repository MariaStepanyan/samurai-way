import React from 'react'
import { InitialStateType, addMessageAC } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { Dispatch, compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'

type mapDispatchToPropsType = {
  addMessage: (newMessageText: string) => void
}

export type MyPostsPropsType = mapDispatchToPropsType & InitialStateType

export type isAuthType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): InitialStateType => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addMessage: (newMessageText: string) => {
      dispatch(addMessageAC(newMessageText))
    },
  }
}

export const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
