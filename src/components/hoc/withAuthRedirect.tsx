import React, { ComponentType } from 'react'
import { Redirect } from 'react-router-dom'
import { Dialogs } from '../dialogs/Dialogs'
import { AppRootStateType } from '../../redux/redux-store'
import { isAuthType } from '../dialogs/DialogsContainer'
import { connect } from 'react-redux'

const mapStateToPropsForRedirect = (state: AppRootStateType): isAuthType => {
  return { isAuth: state.auth.isAuth }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: isAuthType) => {
    const { isAuth, ...restProps } = props
    if (!isAuth) return <Redirect to={'/login'} />
    return <Component {...(restProps as T & {})} />
  }

 

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  )
  return ConnectedAuthRedirectComponent
}
