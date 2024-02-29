import { FC } from 'react'
import { MyPosts } from './posts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { ActionType, RootStateType } from '../../redux/state'

type ProfileProps = {
  state: RootStateType
  dispatch: (action: ActionType) => void
}

export const Profile: FC<ProfileProps> = ({ state, dispatch }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={state} dispatch={dispatch} />
    </div>
  )
}
