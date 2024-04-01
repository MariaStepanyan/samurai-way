import { Profile } from './Profile'
import { MyPostsContainer } from './posts/MyPostsContainer'
import { ProfileInfo } from './profileInfo/ProfileInfo'

export default {
  component: Profile,
}

export const ProfilePage = () => {
  return (
    <div>
      {/* <ProfileInfo /> */}
      <MyPostsContainer />
    </div>
  )
}
