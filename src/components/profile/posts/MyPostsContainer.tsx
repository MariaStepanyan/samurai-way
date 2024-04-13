import {
  InitialStateType,
  addPostAC,
  postChangeAC,
} from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

export type MyPostsPropsType = mapDispatchToPropsType & InitialStateType

type mapDispatchToPropsType = {
  postChange: (text: string) => void
  addPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppRootStateType): InitialStateType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    postChange: (text: string) => {
      dispatch(postChangeAC(text))
    },
    addPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    },
  }
}

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)
