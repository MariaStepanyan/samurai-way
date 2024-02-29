import { store } from '../../redux/state'
import { Profile } from './Profile'
import { MyPosts } from './posts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'

export default {
  component: Profile,
}

export const ProfilePage = () => {
  const state = store.getState()
  const dispatch = store.dispatch
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={state} dispatch={dispatch} />
    </div>
  )
}
