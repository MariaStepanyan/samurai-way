import { FC } from 'react'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { MyPostsContainer } from './posts/MyPostsContainer'

export type ProfilePropsType = {
  profile: any
}

export const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}
