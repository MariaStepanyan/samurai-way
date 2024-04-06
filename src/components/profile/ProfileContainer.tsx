import React, { ComponentType } from 'react'
import { Profile } from './Profile'
import { AppRootStateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import { getProfile, setUserProfile } from '../../redux/profile-reducer'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'
import { Login } from '../login/Login'
import { isAuthType } from '../dialogs/DialogsContainer'
export type ProfileType = {
  aboutMe: string
  contacts: {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
  }
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: {
    small: string
    large: string
  }
}
// type PathParamsType = {
//   userId: number
// }

type WithRouterContainerType = {
  match: {
    isExact: boolean
    params: {
      userId: undefined | number
    }
    path: string
    url: string
  }
}

type mapDispatchToPropsType = {
  getProfile: (userId: number | undefined) => void
}
type mapStateToPropsType = {
  profile: ProfileType
  isAuth: boolean
}

type OwnUsersPropsType = mapDispatchToPropsType &
  mapStateToPropsType &
  isAuthType
// type CommonUsersPropsType = OwnUsersPropsType & RouteComponentProps<PathParamsType>
type CommonUsersPropsType = OwnUsersPropsType & WithRouterContainerType

class ProfileContainer extends React.Component<CommonUsersPropsType> {
  componentDidMount(): void {
    this.props.getProfile(this.props.match.params.userId)
  }

  render() {
    if(!this.props.isAuth) return <Redirect to={'/login'} />
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
}

let mapStateToProps = (
  state: AppRootStateType
): mapStateToPropsType & isAuthType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  }
}
const withRouterContainer = withRouter<any, ComponentType<any>>(
  ProfileContainer
)

export default connect(mapStateToProps, {
  getProfile,
})(withRouterContainer)
