import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import axios from 'axios'
import React from 'react'
import { Users } from './Users'
import {
  UserType,
  UsersType,
  onFollowAC,
  onUnFollowAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
} from '../../redux/users-reducer'
import { Dispatch } from 'redux'

type mapDispatchToPropsType = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalCount: (totalCount: number) => void
}

export type MyUsersPropsType = mapDispatchToPropsType & UsersType

class UsersCC extends React.Component<MyUsersPropsType> {
  componentDidMount(): void {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )

      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
      })
  }
  onPageChanged = (p: number) => {
    this.props.setCurrentPage(p)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }
  render() {
    return (
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
      />
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
  }
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
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalCount: (totalCount: number) => {
      dispatch(setTotalCountAC(totalCount))
    },
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersCC)
