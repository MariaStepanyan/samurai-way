import { store } from '../../redux/state'
import { Profile } from './Profile'

export default {
  component: Profile,
}

export const ProfilePage = () => {
  return <Profile store={store} />
}
