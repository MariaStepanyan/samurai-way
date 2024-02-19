import { FC } from 'react'
import s from './MyPosts.module.css'
import { Post } from './post/Post'
import { PostType } from '../../../redux/state'
import React from 'react'

type MyPostsProps = {
  posts: PostType[]
  addPost: (newText: string) => void
}

export const MyPosts: FC<MyPostsProps> = ({ posts, addPost }) => {
  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const onAddPost = () => {
    if (newPostElement.current) {
      addPost(newPostElement.current.value)
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
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
