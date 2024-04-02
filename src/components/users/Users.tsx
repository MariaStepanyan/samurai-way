import s from './users.module.css'
import someAvatar from '../../assets/images/somePhoto.png'
import { FC } from 'react'
import { UserType } from '../../redux/users-reducer'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

type UsersPropsType = {
  totalCount: number
  pageSize: number
  onPageChanged: (p: number) => void
  currentPage: number
  users: UserType[]
  unFollow: (userId: number) => void
  follow: (userId: number) => void
}

export const Users: FC<UsersPropsType> = ({
  totalCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  unFollow,
  follow,
}) => {
  const pagesCount = Math.ceil(totalCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      {pages.map((p) => (
        <span
          onClick={() => {
            onPageChanged(p)
          }}
          key={p}
          className={currentPage === p ? s.currentPage : ''}
        >
          {p}
        </span>
      ))}
      {users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img
                src={u.photos.small !== null ? u.photos.small : someAvatar}
                className={s.photo}
              />
            </NavLink>
            <div>{u.name}</div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    usersAPI.unFollowUser(u.id).then((res) => {
                      unFollow(u.id)
                    })
                  }}
                >
                  unfollowed
                </button>
              ) : (
                <button
                  onClick={() => {
                    usersAPI.followUser(u.id).then((res) => {
                      follow(u.id)
                    })
                  }}
                >
                  followed
                </button>
              )}
            </div>
            <div>{u.status}</div>
          </div>
          <div>
            <div>{'u.country'}</div>
            <div>{'u.city'}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
