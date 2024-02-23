import { FC } from 'react'
import { MyPosts } from './posts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { storeType } from '../../redux/state'

type ProfileProps = {
  store: storeType
}

export const Profile: FC<ProfileProps> = ({ store }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts store={store} state={store.getState()} />
    </div>
  )
}
