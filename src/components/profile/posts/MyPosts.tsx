import { FC } from 'react'
import { PostType } from '../../..'
import s from './MyPosts.module.css'
import { Post } from './post/Post'

type MyPostsProps = {
  posts: PostType[]
}

export const MyPosts:FC<MyPostsProps> = ({posts}) => {
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
