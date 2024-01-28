import { MyPosts } from './posts/MyPosts'
import { ProfileInfo } from './profileInfe/ProfileInfo'

export const ProfilePage = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}
