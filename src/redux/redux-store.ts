import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { sidebarReducer } from './sidebar-reducer'
import { userReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: userReducer,
  auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>
