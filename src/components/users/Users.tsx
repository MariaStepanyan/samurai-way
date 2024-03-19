import { MyUsersPropsType } from './UsersContainer'
import s from './users.module.css'

export const Users = (props: MyUsersPropsType) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: 'Dimich',
        status: 'I am Boss',
        country: 'Russia',
        city: 'Moscow',
        followed: true,
        photo:
          'https://i.pinimg.com/originals/13/ac/c5/13acc5169bb5040b48a38168be255cde.jpg',
      },
      {
        id: 2,
        fullName: 'Sveta',
        status: 'I am Boss too',
        country: 'Spain',
        city: 'Mallorca',
        followed: false,
        photo:
          'https://a.storyblok.com/f/178900/1920x1080/226ff030f5/crunchyroll-hime-forest-winter-2024.jpg/m/1200x0/filters:quality(95)format(webp)',
      },
      {
        id: 3,
        fullName: 'Valera',
        status: 'I am Boss too',
        country: 'Russia',
        city: 'Volgograd',
        followed: true,
        photo:
          'https://lh3.googleusercontent.com/proxy/eAVmHbX7kU51HFrudLldZ2zjcl6hGZIqFI7nXYSbddqHtpxhlvmk0LhZm_k6Exz6EWYCD1mfggBMqg5rCvr3TxOM-HpReAdO30tpgpOhExI9k4uf8NQy9LZDkwnnG7gsjfRbCxE',
      },
      {
        id: 4,
        fullName: 'Maria',
        status: 'I am Boss too',
        country: 'Russia',
        city: 'Stavropol',
        followed: true,
        photo:
          'https://www.shutterstock.com/image-illustration/rose-samurai-600nw-244720948.jpg',
      },
    ])
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <img src={u.photo} className={s.photo} />
            <div>{u.fullName}</div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unFollow(u.id)}>unfollowed</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>followed</button>
              )}
            </div>
            <div>{u.status}</div>
          </div>
          <div>
            <div>{u.country}</div>
            <div>{u.city}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
