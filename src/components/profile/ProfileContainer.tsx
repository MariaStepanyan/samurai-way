import React, { ComponentType } from 'react'
import { Profile } from './Profile'
import { AppRootStateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import { getProfile, setUserProfile } from '../../redux/profile-reducer'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'
import { Login } from '../login/Login'
import { isAuthType } from '../dialogs/DialogsContainer'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
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
}

type OwnUsersPropsType = mapDispatchToPropsType & mapStateToPropsType
// type CommonUsersPropsType = OwnUsersPropsType & RouteComponentProps<PathParamsType>
type CommonUsersPropsType = OwnUsersPropsType & WithRouterContainerType

class ProfileContainer extends React.Component<CommonUsersPropsType> {
  componentDidMount(): void {
    this.props.getProfile(this.props.match.params.userId)
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return { profile: state.profilePage.profile }
}
// const withRouterContainer = withRouter<any, ComponentType<any>>(
//   AuthRedirectComponent
// )

// export default connect(mapStateToProps, {
//   getProfile,
// })(withRouterContainer)

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
