export type UserType = {
  id: number
  name: string
  status: string | null
  // country: string
  // city: string
  followed: boolean
  photos: {
    small: string | null
    large: string | null
  }
}
export type UsersType = {
  users: UserType[]
  totalCount: number
  error: null
  pageSize: number
  currentPage: number
}

type OnFollowACType = ReturnType<typeof onFollowAC>
type OnUnFollowACType = ReturnType<typeof onUnFollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type SetTotalCountACType = ReturnType<typeof setTotalCountAC>

type ActionType =
  | OnFollowACType
  | OnUnFollowACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetTotalCountACType

let initialState: UsersType = {
  users: [],
  totalCount: 0,
  error: null,
  pageSize: 10,
  currentPage: 1,
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
      return { ...state, users: action.users }
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage }
    case 'SET-TOTAL-COUNT':
      return { ...state, totalCount: action.totalCount }
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
export const setCurrentPageAC = (currentPage: number) => {
  return { type: 'SET-CURRENT-PAGE', currentPage } as const
}
export const setTotalCountAC = (totalCount: number) => {
  return { type: 'SET-TOTAL-COUNT', totalCount } as const
}
