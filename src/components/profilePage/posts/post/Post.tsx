import s from './Post.module.css'

type PostPropsType = {
  text: string
  like: number
}

export const Post = (props: PostPropsType) => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGlhm3ECyxcu8Qz1QaFDDzvKGr52HhIwemg&usqp=CAU"
        alt=""
      />
      {props.text}
      <div>
        <span>like </span> {props.like}
      </div>
    </div>
  )
}
