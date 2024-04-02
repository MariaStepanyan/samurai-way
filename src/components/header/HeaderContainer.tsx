import React from 'react'
import { Header, HeaderPropsType } from './Header'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { setAuthUser } from '../../redux/auth-reducer'
import { authAPI } from '../../api/api'

type mapDispatchToPropsType = {
  setAuthUser: (id: number, email: string, login: string) => void
}
type mapStateToPropsType = {
  login: string
  isAuth: boolean
}

export type HeaderContainerPropsType = mapDispatchToPropsType &
  mapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount(): void {
    authAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        this.props.setAuthUser(id, email, login)
      }
    })
  }

  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return { login: state.auth.login, isAuth: state.auth.isAuth }
}

export default connect(mapStateToProps, {
  setAuthUser,
})(HeaderContainer)
