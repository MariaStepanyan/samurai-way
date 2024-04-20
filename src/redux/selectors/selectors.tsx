import { AppRootStateType } from '../redux-store'

export const getAllUsers = (state: AppRootStateType) => {
  return state.usersPage.users
}

export const getTotalCount = (state: AppRootStateType) => {
  return state.usersPage.totalCount
}

export const getError = (state: AppRootStateType) => {
  return state.usersPage.error
}

export const getPageSize = (state: AppRootStateType) => {
  return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppRootStateType) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: AppRootStateType) => {
  return state.usersPage.isFetching
}

export const getFolloingInProgress = (state: AppRootStateType) => {
  return state.usersPage.folloingInProgress
}
