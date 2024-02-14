import s from './MyPosts.module.css'
import { Post } from './post/Post'

type Post = {
  id: number
  text: string
  like: number
}

const posts: Post[] = [
  { id: 1, text: 'Hi, how are you', like: 15 },
  { id: 2, text: "it's my first post", like: 20 },
]

export const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts.map((post) => (
          <Post text={post.text} like={post.like} />
        ))}
      </div>
    </div>
  )
}
