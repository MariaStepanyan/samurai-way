import s from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.item}>
        <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>b</a>
      </div>
      <div className={s.item}>
        <a>c</a>
      </div>
      <div className={s.item}>
        <a>d</a>
      </div>
    </div>
  )
}
