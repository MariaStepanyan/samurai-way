import { Profile } from './Profile'

export default {
  component: Profile,
}

type PostType = {
  id: number
  text: string
  like: number
}

const posts: PostType[] = [
  { id: 1, text: 'Hi, how are you', like: 15 },
  { id: 2, text: "it's my first post", like: 20 },
]

let newPostText = ''

const addPost = () => {
  const newPost = { id: 5, text: newPostText, like: 10 }
  posts.push(newPost)
}
const updateNewPostChange = (newText: string) => {
  newPostText = newText

}

export const ProfilePage = () => {
  return (
    <Profile
      posts={posts}
      addPost={addPost}
      newPostText={newPostText}
      updateNewPostChange={updateNewPostChange}
    />
  )
}
