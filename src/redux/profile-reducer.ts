import { Dispatch } from 'redux'
import { profileAPI } from '../api/api'

type AddPostAT = ReturnType<typeof addPostAC>
type SetUserProfileAT = ReturnType<typeof setUserProfile>

export type ActionType = AddPostAT | SetUserProfileAT | ReturnType<typeof setUserProfileStatusAC>

const ADD_POST = 'ADD-POST'
const SET_PROFILE_USER = 'SET-PROFILE-USER'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'

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
  // newPostText: '',
  profile: {
    aboutMe: '',
    contacts: {
      facebook: '',
      website: null,
      vk: '',
      twitter: '',
      instagram: '',
      youtube: null,
      github: '',
      mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: '',
    fullName: '',
    userId: 0,
    photos: {
      small: '',
      large: '',
    },
  },
  status: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: 5,
        text: action.newPostText,
        like: 10,
      }
      return { ...state, posts: [...state.posts, newPost] }
    case SET_PROFILE_USER:
      return { ...state, profile: action.profile }
    case SET_PROFILE_STATUS:
      return { ...state, status: action.data }

    default:
      return state
  }
}

export const setUserProfileStatusAC = (data: string) => {
  return { type: SET_PROFILE_STATUS, data } as const
}

export const addPostAC = (newPostText: string) =>
  ({
    type: ADD_POST,
    newPostText: newPostText,
  } as const)

export const setUserProfile = (profile: any) =>
  ({
    type: SET_PROFILE_USER,
    profile,
  } as const)

export const getProfile = (userId?: number | null) => (dispatch: Dispatch) => {
  if (!userId) {
    userId = 30852
  }
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data))
  })
}

export const getProfileStatus = (userId?: number | null) => (dispatch: Dispatch) => {
  if (!userId) {
    userId = 30852
  }
  profileAPI.getProfileStatus(userId).then((data) => {
    dispatch(setUserProfileStatusAC(data))
  })
}

export const updateProfileStatus = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserProfileStatusAC(status))
    }
  })
}
