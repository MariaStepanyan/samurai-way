import { InitialStateType, addPostAC } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

export type MyPostsPropsType = mapDispatchToPropsType & InitialStateType

type mapDispatchToPropsType = {
  addPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppRootStateType): InitialStateType => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    },
  }
}

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)
