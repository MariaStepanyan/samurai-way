import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { logout } from '../../redux/auth-reducer'

type mapDispatchToPropsType = {
  logout: () => void
}
type mapStateToPropsType = {
  login: string | null
  isAuth: boolean
}

export type HeaderContainerPropsType = mapDispatchToPropsType & mapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return { login: state.auth.login, isAuth: state.auth.isAuth }
}

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer)
