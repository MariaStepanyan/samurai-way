import { ChangeEvent, FC } from 'react'
import s from './MyPosts.module.css'
import { Post } from './post/Post'
import { RootStateType, storeType } from '../../../redux/state'

type MyPostsProps = {
  store: storeType
  state: RootStateType
}

export const MyPosts: FC<MyPostsProps> = ({ state, store }) => {
  const { posts, newPostText } = state.profilePage
  let { addPost, updateNewPostText } = store

  addPost = addPost.bind(store)
  updateNewPostText = updateNewPostText.bind(store)

  const postsElement = posts.map((post, index) => (
    <Post key={index} text={post.text} like={post.like} />
  ))

  const onAddPost = () => {
    addPost()
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewPostText(e.currentTarget.value)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea value={newPostText} onChange={onPostChange}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  )
}
