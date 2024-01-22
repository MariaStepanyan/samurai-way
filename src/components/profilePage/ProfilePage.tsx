import s from './ProfilePage.module.css'
import { MyPosts } from './posts/MyPosts'

export const ProfilePage = () => {
  return (
    <div>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2opMVQfIlIWdtxaIZCpyE1JifcnU7SgHFHg&usqp=CAU"/>
     <div className={s.item}>ava + description</div>
     <MyPosts />
    </div>
  )
}
