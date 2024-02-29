import { ChangeEvent, FC } from 'react'
import s from './MyPosts.module.css'
import { Post } from './post/Post'
import { RootStateType } from '../../../redux/state'

type MyPostsProps = {
  state: RootStateType
  dispatch: (action: any) => void
}

export const MyPosts: FC<MyPostsProps> = ({ state, dispatch }) => {
  const { posts, newPostText } = state.profilePage

  const postsElement = posts.map((post, index) => (
    <Post key={index} text={post.text} like={post.like} />
  ))

  const onAddPost = () => {
    dispatch({ type: 'ADD-POST' })
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    dispatch({ type: 'UPDATE-NEWPOST-TEST', newText: text })
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
