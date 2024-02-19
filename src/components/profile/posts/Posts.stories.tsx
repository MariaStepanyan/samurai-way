import { MyPosts } from './MyPosts'

export default {
  component: MyPosts,
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


const addPost = (newText:string) => {

  const newPost = {id:5, text:newText, like:10}
  posts.push(newPost)
}

export const Posts = () => {
  return <MyPosts posts={posts} addPost={addPost}/>
}
