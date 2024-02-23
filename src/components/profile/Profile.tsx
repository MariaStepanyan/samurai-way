import { FC } from 'react'
import { MyPosts } from './posts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { PostType } from '../../redux/state'

type ProfileProps = {
  posts: PostType[]
  addPost: () => void
  newPostText: string
  updateNewPostChange: (newText: string) => void
}

export const Profile: FC<ProfileProps> = ({ posts, addPost, newPostText, updateNewPostChange }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostChange={updateNewPostChange}/>
    </div>
  )
}
