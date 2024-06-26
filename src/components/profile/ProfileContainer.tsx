import React, { ComponentType } from 'react'
import { Profile } from './Profile'
import { AppRootStateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import { getProfile, getProfileStatus, setUserProfile, updateProfileStatus } from '../../redux/profile-reducer'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'
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
      userId: number | null
    }
    path: string
    url: string
  }
}

type mapDispatchToPropsType = {
  getProfile: (userId: number | undefined) => void
  getProfileStatus: (userId: number | undefined) => void
  updateProfileStatus: (status: string) => void
}
type mapStateToPropsType = {
  profile: ProfileType
  status: string
  authorisedUserId: number | null
  isAuth: boolean
}

type OwnUsersPropsType = mapDispatchToPropsType & mapStateToPropsType
// type CommonUsersPropsType = OwnUsersPropsType & RouteComponentProps<PathParamsType>
type CommonUsersPropsType = OwnUsersPropsType & WithRouterContainerType

class ProfileContainer extends React.Component<CommonUsersPropsType> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorisedUserId
      // if (!userId) {
      //   ;(this.props as any).history.push('/login')
      // }
    }
    this.props.getProfile(userId as number)
    this.props.getProfileStatus(userId as number)
  }

  render() {
    return (
      <>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateProfileStatus={this.props.updateProfileStatus}
        />
      </>
    )
  }
}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getProfile,
    getProfileStatus,
    updateProfileStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
