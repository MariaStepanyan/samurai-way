import { FC } from 'react'
import { PostType } from '../..'
import { MyPosts } from './posts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'

type ProfileProps = {
  posts: PostType[]
}

export const Profile: FC<ProfileProps> = ({ posts }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  )
}
