import { FC } from 'react'
import s from './MyPosts.module.css'
import { Post } from './post/Post'
import { AddMessageFormRedux } from '../../common/Form'
import { MyPostsPropsType } from './MyPostsContainer'
import { ValuesForm } from '../../dialogs/Dialogs'

export const MyPosts: FC<MyPostsPropsType> = (props) => {
  const postsElement = props.posts.map((post, index) => (
    <Post key={index} text={post.text} like={post.like} />
  ))

  const onAddPost = (values: ValuesForm) => {
    props.addPost(values.newBody)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddMessageFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElement}</div>
    </div>
  )
}
