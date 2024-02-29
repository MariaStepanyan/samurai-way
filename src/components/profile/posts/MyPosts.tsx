import { ChangeEvent, FC } from 'react'
import s from './MyPosts.module.css'
import { Post } from './post/Post'
import {
  ActionType,
  RootStateType,
  addPostAC,
  postChangeAC,
} from '../../../redux/state'
import { Form } from '../../common/Form'

type MyPostsProps = {
  state: RootStateType
  dispatch: (action: ActionType) => void
}

export const MyPosts: FC<MyPostsProps> = ({ state, dispatch }) => {
  const { posts, newPostText } = state.profilePage

  const postsElement = posts.map((post, index) => (
    <Post key={index} text={post.text} like={post.like} />
  ))

  const onAddPost = () => {
    dispatch(addPostAC(newPostText))
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    dispatch(postChangeAC(text))
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <Form
        btnName={'Add post'}
        newValueText={newPostText}
        onValueChange={onPostChange}
        onAddValue={onAddPost}
      />
      <div className={s.posts}>{postsElement}</div>
    </div>
  )
}
