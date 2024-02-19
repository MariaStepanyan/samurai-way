import { FC } from 'react'
import { MyPosts } from './posts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { PostType } from '../../redux/state'

type ProfileProps = {
  posts: PostType[]
  addPost: (newText: string) => void
}

export const Profile: FC<ProfileProps> = ({ posts, addPost }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost}/>
    </div>
  )
}
