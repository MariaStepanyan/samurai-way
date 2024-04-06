import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import React from 'react'
import { Users } from './Users'
import {
  UsersType,
  toggleFollowingProgress,
  getUsers,
  unFollowUser,
  followUser,
} from '../../redux/users-reducer'
import { Preload } from '../common/Preload'

type mapDispatchToPropsType = {
  toggleFollowingProgress: (isFetch: boolean, id: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
  unFollowUser: (id: number) => void
  followUser: (id: number) => void
}

export type MyUsersPropsType = mapDispatchToPropsType & UsersType

class UsersCC extends React.Component<MyUsersPropsType> {
  componentDidMount(): void {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (p: number) => {
    this.props.getUsers(p, this.props.pageSize)
  }
  render() {
    return (
      <>
        {this.props.isFetching && <Preload />}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unFollow={this.props.unFollowUser}
          follow={this.props.followUser}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          folloingInProgress={this.props.folloingInProgress}
        />
      </>
    )
  }
}

let mapStateToProps = (state: AppRootStateType): UsersType => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    error: state.usersPage.error,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    folloingInProgress: state.usersPage.folloingInProgress,
  }
}

export const UsersContainer = connect(mapStateToProps, {
  toggleFollowingProgress,
  getUsers,
  unFollowUser,
  followUser,
})(UsersCC)
