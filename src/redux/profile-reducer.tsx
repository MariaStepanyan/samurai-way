import { ActionType } from './state'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

export type PostType = {
  id: number
  text: string
  like: number
}

export type InitialStateType = typeof initialState

let initialState = {
  posts: [
    { id: 1, text: 'Hi, how are you', like: 15 },
    { id: 2, text: "it's my first post", like: 20 },
  ] as PostType[],
  newPostText: '',
}

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: 5,
        text: action.newPostText,
        like: 10,
      }
      return { ...state, posts: [...state.posts, newPost], newPostText: '' }
    case UPDATE_POST_TEXT:
      return { ...state, newPostText: action.newText }
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
