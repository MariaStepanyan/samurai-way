import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import React from 'react'
import { Users } from './Users'
import {
  UserType,
  UsersType,
  follow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  unFollow,
} from '../../redux/users-reducer'
import { Preload } from '../common/Preload'
import { usersAPI } from '../../api/api'

type mapDispatchToPropsType = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalCount: (totalCount: number) => void
  toggleIsFetching: (isFetch: boolean) => void
}

export type MyUsersPropsType = mapDispatchToPropsType & UsersType

class UsersCC extends React.Component<MyUsersPropsType> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true)
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalCount(data.totalCount)
      })
  }
  onPageChanged = (p: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(p)
    usersAPI
      .getUsers(p, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      })
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
          unFollow={this.props.unFollow}
          follow={this.props.follow}
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
  }
}

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
})(UsersCC)
