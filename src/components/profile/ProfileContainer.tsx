import React, { ComponentType } from 'react'
import { Profile } from './Profile'
import { AppRootStateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { profileAPI } from '../../api/api'

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
  setUserProfile: (profile: ProfileType) => void
}
type mapStateToPropsType = {
  profile: ProfileType
}

type OwnUsersPropsType = mapDispatchToPropsType & mapStateToPropsType
// type CommonUsersPropsType = OwnUsersPropsType & RouteComponentProps<PathParamsType>
type CommonUsersPropsType = OwnUsersPropsType & WithRouterContainerType

class ProfileContainer extends React.Component<CommonUsersPropsType> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    profileAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data)
    })
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  }
}
const withRouterContainer = withRouter<any, ComponentType<any>>(
  ProfileContainer
)

export default connect(mapStateToProps, {
  setUserProfile,
})(withRouterContainer)
