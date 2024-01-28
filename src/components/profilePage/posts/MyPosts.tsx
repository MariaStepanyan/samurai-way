import s from './MyPosts.module.css'
import { Post } from './post/Post'

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
        <Post text={'Hi, how are you'} like={15} />
        <Post text={"it's my first post"} like={20} />
      </div>
    </div>
  )
}
