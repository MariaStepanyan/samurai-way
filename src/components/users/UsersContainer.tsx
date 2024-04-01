import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import axios from 'axios'
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
import { Dispatch } from 'redux'
import { Preload } from '../common/Preload'

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
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )

      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
      })
  }
  onPageChanged = (p: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(p)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
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
