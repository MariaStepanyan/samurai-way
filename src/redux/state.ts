import imgDimich from '../assets/images/Dimich.jpg'
import imgAndrey from '../assets/images/Andrey.jpg'
import imgViktor from '../assets/images/Viktor.jpg'
import imgSasha from '../assets/images/Sasha.jpg'
import imgValera from '../assets/images/Valera.jpg'
import imgSveta from '../assets/images/Sveta.jpg'

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
  }
  sidebar: {
    friends: friendstype[]
  }
}

export type storeType = {
  _state: RootStateType
  getState: () => RootStateType
  _callsuscriber: () => void
  addPost: () => void
  updateNewPostText: (newText: string) => void
  subscribe: (observer: () => void) => void
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
    },
    sidebar: {
      friends: [
        { name: 'Sasha', id: 1 },
        { name: 'Sveta', id: 2 },
        { name: 'Valera', id: 3 },
      ],
    },
  },
  getState() {
    return this._state
  },
  _callsuscriber() {},
  addPost() {
    const newPost: PostType = {
      id: 5,
      text: this._state.profilePage.newPostText,
      like: 10,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callsuscriber()
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText
    this._callsuscriber()
  },
  subscribe(observer: () => void) {
    this._callsuscriber = observer
  },
}
