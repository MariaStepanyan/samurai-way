import { FC } from 'react'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { MyPostsContainer } from './posts/MyPostsContainer'

export const Profile: FC = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}
