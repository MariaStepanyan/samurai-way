import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2opMVQfIlIWdtxaIZCpyE1JifcnU7SgHFHg&usqp=CAU" />
      <div className={s.descriptionBlock}>ava + description</div>
    </>
  )
}
