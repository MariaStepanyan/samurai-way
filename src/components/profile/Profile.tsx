import { FC } from 'react'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { MyPostsContainer } from './posts/MyPostsContainer'
import { ProfileType } from './ProfileContainer'

export type ProfilePropsType = {
  profile: ProfileType
}

export const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}
