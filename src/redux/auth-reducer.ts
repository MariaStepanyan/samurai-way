import { Dispatch } from 'redux'
import { LoginParamsType, authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET-USER-DATA'

type SetAuthUserType = ReturnType<typeof setAuthUser>

type ActionType = SetAuthUserType

export type InitialAuthStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state: InitialAuthStateType = initialState, action: ActionType): InitialAuthStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export const setAuthUser = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
  ({
    type: SET_USER_DATA,
    data: { id, email, login, isAuth },
  } as const)

export const getAuth = () => (dispatch: Dispatch) => {
  authAPI.getAuth().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data
      dispatch(setAuthUser(id, email, login, true))
    }
  })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
  authAPI.logIn(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuth())
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : 'some error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  })
}

export const logout = () => (dispatch: any) => {
  authAPI.logOut().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUser(null, null, null, false))
    }
  })
}
