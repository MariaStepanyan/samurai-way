import { MyPosts } from './posts/MyPosts'
import { ProfileInfo } from './profileInfe/ProfileInfo'

const dialogs = [
  {
    name: 'Dimych',
    id: 1,
  },
  {
    name: 'Andrey',
    id: 2,
  },
  {
    name: 'Viktor',
    id: 3,
  },
  {
    name: 'Sasha',
    id: 4,
  },
  {
    name: 'Valera',
    id: 5,
  },
  {
    name: 'Sveta',
    id: 6,
  },
]


export const ProfilePage = () => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}
