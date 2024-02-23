import { ChangeEvent, FC, useState } from 'react'
import s from './MyPosts.module.css'
import { Post } from './post/Post'
import { PostType } from '../../../redux/state'
import React from 'react'

type MyPostsProps = {
  posts: PostType[]
  addPost: () => void
  newPostText: string
  updateNewPostChange: (newText: string) => void
}

export const MyPosts: FC<MyPostsProps> = ({
  posts,
  addPost,
  newPostText,
  updateNewPostChange,
}) => {
  const postsElement = posts.map((post, index) => (
    <Post key={index} text={post.text} like={post.like} />
  ))

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const onAddPost = () => {
    addPost()
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewPostChange(e.currentTarget.value)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={newPostText}
            onChange={onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  )
}
