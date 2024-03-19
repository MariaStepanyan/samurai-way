import { connect } from 'react-redux'
import { Users } from './Users'
import { AppRootStateType } from '../../redux/redux-store'
import {
  UserType,
  UsersType,
  onFollowAC,
  onUnFollowAC,
  setUsersAC,
} from '../../redux/users-reducer'
import { Dispatch } from 'redux'

type mapDispatchToPropsType = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
}

export type MyUsersPropsType = mapDispatchToPropsType & UsersType

let mapStateToProps = (state: AppRootStateType): UsersType => {
  return { users: state.usersPage.users }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(onFollowAC(userId))
    },
    unFollow: (userId: number) => {
      dispatch(onUnFollowAC(userId))
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users))
    },
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
