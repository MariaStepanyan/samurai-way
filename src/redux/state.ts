export type Dialogprops = {
  name: string
  id: number
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

export type RootStateType = {
  profilePage: {
    posts: PostType[]
    newPostText: string
  }
  messagesPage: {
    dialogs: Dialogprops[]
    messages: MessageType[]
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
        { name: 'Dimych', id: 1 },
        { name: 'Andrey', id: 2 },
        { name: 'Viktor', id: 3 },
        { name: 'Sasha', id: 4 },
        { name: 'Valera', id: 5 },
        { name: 'Sveta', id: 6 },
      ],
      messages: [
        { id: 1, text: 'Om' },
        { id: 2, text: 'Ah' },
        { id: 3, text: 'Hum' },
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
