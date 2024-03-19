export type UserType = {
  id: number
  fullName: string
  status: string
  country: string
  city: string
  followed: boolean
  photo: string
}
export type UsersType = {
  users: UserType[]
}

type OnFollowACType = ReturnType<typeof onFollowAC>
type OnUnFollowACType = ReturnType<typeof onUnFollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>

type ActionType = OnFollowACType | OnUnFollowACType | SetUsersACType

let initialState: UsersType = {
  users: [],
}

export const userReducer = (
  state: UsersType = initialState,
  action: ActionType
): UsersType => {
  switch (action.type) {
    case 'FOLLOW-USER':
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: true } : u
        ),
      }
    case 'UNFOLLOW-USER':
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: false } : u
        ),
      }
    case 'SET-USERS':
      return { ...state, users: [...state.users, ...action.users] }
    default:
      return state
  }
}

export const onFollowAC = (userId: number) => {
  return { type: 'FOLLOW-USER', userId } as const
}

export const onUnFollowAC = (userId: number) => {
  return { type: 'UNFOLLOW-USER', userId } as const
}

export const setUsersAC = (users: UserType[]) => {
  return { type: 'SET-USERS', users } as const
}
