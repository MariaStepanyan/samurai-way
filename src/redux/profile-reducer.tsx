import { ActionType, PostType, ProfilePageType } from './state'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: 5,
        text: action.newPostText,
        like: 10,
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostAC = (newPostText: string) =>
  ({
    type: ADD_POST,
    newPostText: newPostText,
  } as const)
export const postChangeAC = (text: string) =>
  ({
    type: UPDATE_POST_TEXT,
    newText: text,
  } as const)
