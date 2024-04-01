import axios from 'axios'
import React from 'react'
import { Profile, ProfilePropsType } from './Profile'
import { AppRootStateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'

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

type mapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

export type MyUsersPropsType = mapDispatchToPropsType & ProfilePropsType

class ProfileContainer extends React.Component<MyUsersPropsType> {
  componentDidMount(): void {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)

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

export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainer)
