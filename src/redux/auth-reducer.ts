const SET_USER_DATA = 'SET-USER-DATA'

type SetAuthUserType = ReturnType<typeof setAuthUser>

type ActionType = SetAuthUserType

export type InitialStateType = {
  id: number
  email: string
  login: string
  isAuth: boolean
}

let initialState = {
  id: 0,
  email: '',
  login: '',
  isAuth: true,
}

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true }
    default:
      return state
  }
}

export const setAuthUser = (id: number, email: string, login: string) =>
  ({
    type: SET_USER_DATA,
    data: { id, email, login },
  } as const)
