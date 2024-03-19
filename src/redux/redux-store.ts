import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { combineReducers, createStore } from 'redux'
import { sidebarReducer } from './sidebar-reducer'
import { userReducer } from './users-reducer'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: userReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
