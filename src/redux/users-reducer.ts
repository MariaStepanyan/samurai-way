import { Dispatch } from 'redux'
import { usersAPI } from '../api/api'

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
  isFetching: boolean
  folloingInProgress: number[]
}

type OnFollowACType = ReturnType<typeof follow>
type OnUnFollowACType = ReturnType<typeof unFollow>
type SetUsersACType = ReturnType<typeof setUsers>
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type SetTotalCountACType = ReturnType<typeof setTotalCount>
type ToggleFetchACType = ReturnType<typeof toggleIsFetching>
type ToggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgress>

type ActionType =
  | OnFollowACType
  | OnUnFollowACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetTotalCountACType
  | ToggleFetchACType
  | ToggleFollowingProgressACType

let initialState: UsersType = {
  users: [],
  totalCount: 0,
  error: null,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  folloingInProgress: [],
}

export const userReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
  switch (action.type) {
    case 'FOLLOW-USER':
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)),
      }
    case 'UNFOLLOW-USER':
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)),
      }
    case 'SET-USERS':
      return { ...state, users: action.users }
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage }
    case 'SET-TOTAL-COUNT':
      return { ...state, totalCount: action.totalCount }
    case 'TOGGLE-FETCH':
      return { ...state, isFetching: action.isFetch }
    case 'TOGGLE-FOLLOWING-PROGRESS':
      return {
        ...state,
        folloingInProgress: action.isFetch
          ? [...state.folloingInProgress, action.id]
          : state.folloingInProgress.filter((id) => id !== action.id),
      }
    default:
      return state
  }
}

export const follow = (userId: number) => {
  return { type: 'FOLLOW-USER', userId } as const
}

export const unFollow = (userId: number) => {
  return { type: 'UNFOLLOW-USER', userId } as const
}

export const setUsers = (users: UserType[]) => {
  return { type: 'SET-USERS', users } as const
}
export const setCurrentPage = (currentPage: number) => {
  return { type: 'SET-CURRENT-PAGE', currentPage } as const
}
export const setTotalCount = (totalCount: number) => {
  return { type: 'SET-TOTAL-COUNT', totalCount } as const
}
export const toggleIsFetching = (isFetch: boolean) => {
  return { type: 'TOGGLE-FETCH', isFetch } as const
}

export const toggleFollowingProgress = (isFetch: boolean, id: number) => {
  return { type: 'TOGGLE-FOLLOWING-PROGRESS', isFetch, id } as const
}

export const getUsers = (page: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))
  usersAPI.getUsers(page, pageSize).then((data) => {
    dispatch(setCurrentPage(page))
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
  })
}

export const unFollowUser = (id: number) => (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(true, id))
  usersAPI.unFollowUser(id).then((res) => {
    dispatch(toggleFollowingProgress(false, id))
    dispatch(unFollow(id))
  })
}
export const followUser = (id: number) => (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(true, id))
  usersAPI.followUser(id).then((res) => {
    dispatch(toggleFollowingProgress(false, id))
    dispatch(follow(id))
  })
}
