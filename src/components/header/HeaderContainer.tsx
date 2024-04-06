import React from 'react'
import { Header, HeaderPropsType } from './Header'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { getAuth, setAuthUser } from '../../redux/auth-reducer'
import { authAPI } from '../../api/api'

type mapDispatchToPropsType = {
  getAuth: () => void
}
type mapStateToPropsType = {
  login: string
  isAuth: boolean
}

export type HeaderContainerPropsType = mapDispatchToPropsType &
  mapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount(): void {
    this.props.getAuth()
  }

  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return { login: state.auth.login, isAuth: state.auth.isAuth }
}

export default connect(mapStateToProps, {
  getAuth,
})(HeaderContainer)