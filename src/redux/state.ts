import imgDimich from '../assets/images/Dimich.jpg'
import imgAndrey from '../assets/images/Andrey.jpg'
import imgViktor from '../assets/images/Viktor.jpg'
import imgSasha from '../assets/images/Sasha.jpg'
import imgValera from '../assets/images/Valera.jpg'
import imgSveta from '../assets/images/Sveta.jpg'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export type Dialogprops = {
  name: string
  id: number
  img: string
}

export type MessageType = {
  id: number
  text: string
}

export type PostType = {
  id: number
  text: string
  like: number
}

export type friendstype = {
  name: string
  id: number
}

export type RootStateType = {
  profilePage: {
    posts: PostType[]
    newPostText: string
  }
  messagesPage: {
    dialogs: Dialogprops[]
    messages: MessageType[]
    newMessageText: string
  }
  sidebar: {
    friends: friendstype[]
  }
}

type AddPostAT = ReturnType<typeof addPostAC>
type UpdatePostTextAT = ReturnType<typeof postChangeAC>
type AddMessageTextAT = ReturnType<typeof addMessageAC>
type UpdateMessageTextAT = ReturnType<typeof messageChangeAC>

export type ActionType =
  | AddPostAT
  | UpdatePostTextAT
  | AddMessageTextAT
  | UpdateMessageTextAT

export type storeType = {
  _state: RootStateType
  _callsuscriber: () => void
  getState: () => RootStateType
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionType) => void
}

export let store: storeType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'Hi, how are you', like: 15 },
        { id: 2, text: "it's my first post", like: 20 },
      ],
      newPostText: '',
    },
    messagesPage: {
      dialogs: [
        { name: 'Dimych', id: 1, img: imgDimich },
        { name: 'Andrey', id: 2, img: imgAndrey },
        { name: 'Viktor', id: 3, img: imgViktor },
        { name: 'Sasha', id: 4, img: imgSasha },
        { name: 'Valera', id: 5, img: imgValera },
        { name: 'Sveta', id: 6, img: imgSveta },
      ],
      messages: [
        { id: 1, text: 'Om' },
        { id: 2, text: 'Ah' },
        { id: 3, text: 'Hum' },
      ],
      newMessageText: '',
    },
    sidebar: {
      friends: [
        { name: 'Sasha', id: 1 },
        { name: 'Sveta', id: 2 },
        { name: 'Valera', id: 3 },
      ],
    },
  },
  _callsuscriber() {},
  getState() {
    return this._state
  },
  subscribe(observer: () => void) {
    this._callsuscriber = observer
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost: PostType = {
        id: 5,
        text: action.newPostText,
        like: 10,
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callsuscriber()
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callsuscriber()
    } else if (action.type === ADD_MESSAGE) {
      const newMessage: MessageType = {
        id: 4,
        text: action.newMessageText,
      }
      this._state.messagesPage.messages.push(newMessage)
      this._state.messagesPage.newMessageText = ''
      this._callsuscriber()
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newText
      this._callsuscriber()
    }
  },
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

export const addMessageAC = (newMessageText: string) =>
  ({
    type: ADD_MESSAGE,
    newMessageText: newMessageText,
  } as const)
export const messageChangeAC = (text: string) =>
  ({
    type: UPDATE_MESSAGE_TEXT,
    newText: text,
  } as const)
