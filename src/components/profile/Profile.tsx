import { FC } from 'react'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { MyPostsContainer } from './posts/MyPostsContainer'
import { ProfileType } from './ProfileContainer'

export type ProfilePropsType = {
  profile: ProfileType 
  status: string
  updateProfileStatus: (status: string) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} updateProfileStatus = {props.updateProfileStatus} status={props.status}/>
      <MyPostsContainer />
    </div>
  )
}
