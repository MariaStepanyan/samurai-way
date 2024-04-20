import { getAuth } from './auth-reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

type SetinitializedType = ReturnType<typeof initializedSuccess>

type ActionType = SetinitializedType

export type InitialAppStateType = {
  initialized: boolean
}

let initialState = {
  initialized: false,
}

export const appReducer = (state: InitialAppStateType = initialState, action: ActionType): InitialAppStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true }
    default:
      return state
  }
}

export const initializedSuccess = () =>
  ({
    type: INITIALIZED_SUCCESS,
  } as const)

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getAuth())
  const resolveTimeout = (delay: number) => {
    return new Promise((resolve) => setTimeout(() => resolve(undefined), delay))
  }
  Promise.all([promise, resolveTimeout(500)]).then(() => {
    dispatch(initializedSuccess())
  })
}
