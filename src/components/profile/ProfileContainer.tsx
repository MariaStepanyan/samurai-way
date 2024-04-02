import axios from 'axios'
import React, { ComponentType } from 'react'
import { Profile, ProfilePropsType } from './Profile'
import { AppRootStateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'

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
  lookingForAJob: true
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: {
    small: string
    large: string
  }
}

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

export type MyUsersPropsType = mapDispatchToPropsType &
  ProfilePropsType &
  WithRouterContainerType

class ProfileContainer extends React.Component<MyUsersPropsType> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)

      .then((response) => {
        this.props.setUserProfile(response.data)
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

let mapStateToProps = (state: AppRootStateType) => {
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
