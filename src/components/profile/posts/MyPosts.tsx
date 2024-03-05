import { ChangeEvent, FC } from 'react'
import s from './MyPosts.module.css'
import { Post } from './post/Post'
import { PostType } from '../../../redux/profile-reducer'
import { Form } from '../../common/Form'
import { MyPostsPropsType } from './MyPostsContainer'

export const MyPosts: FC<MyPostsPropsType> = (props) => {
  const postsElement = props.posts.map((post, index) => (
    <Post key={index} text={post.text} like={post.like} />
  ))

  const onAddPost = () => {
    props.addPost(props.newPostText)
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.postChange(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <Form
        btnName={'Add post'}
        newValueText={props.newPostText}
        onValueChange={onPostChange}
        onAddValue={onAddPost}
      />
      <div className={s.posts}>{postsElement}</div>
    </div>
  )
}
