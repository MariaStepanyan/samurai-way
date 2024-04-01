import { Preload } from '../../common/Preload'
import { ProfileType } from '../ProfileContainer'
import s from './ProfileInfo.module.css'

type ProfileInfoType ={
  profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) {
   return  <Preload />
  }
  return (
    <>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2opMVQfIlIWdtxaIZCpyE1JifcnU7SgHFHg&usqp=CAU" />
      <div className={s.descriptionBlock}>
        <img src ={props.profile.photos.large}/>
        ava + description</div>
    </>
  )
}
