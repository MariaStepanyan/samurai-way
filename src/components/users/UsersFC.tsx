import axios from 'axios'
import { MyUsersPropsType } from './UsersContainer'
import s from './users.module.css'
import someAvatar from '../../assets/images/somePhoto.png'

export const Users = (props: MyUsersPropsType) => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')

      .then((response) => props.setUsers(response.data.items))
  }
  return <></>
}
//   return (
//     <div>
//       {props.users.map((u) => (
//         <div key={u.id}>
//           <div>
//             <img
//               src={u.photos.small !== null ? u.photos.small : someAvatar}
//               className={s.photo}
//             />
//             <div>{u.name}</div>
//             <div>
//               {u.followed ? (
//                 <button onClick={() => props.unFollow(u.id)}>unfollowed</button>
//               ) : (
//                 <button onClick={() => props.follow(u.id)}>followed</button>
//               )}
//             </div>
//             <div>{u.status}</div>
//           </div>
//           <div>
//             <div>{'u.country'}</div>
//             <div>{'u.city'}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
