import { rerenderEntireTree } from '../render'

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

export const state = {
  profilePage: {
    posts: <PostType[]>[
      { id: 1, text: 'Hi, how are you', like: 15 },
      { id: 2, text: "it's my first post", like: 20 },
    ],
    newPostText: '',
  },
  messagesPage: {
    dialogs: <Dialogprops[]>[
      { name: 'Dimych', id: 1 },
      { name: 'Andrey', id: 2 },
      { name: 'Viktor', id: 3 },
      { name: 'Sasha', id: 4 },
      { name: 'Valera', id: 5 },
      { name: 'Sveta', id: 6 },
    ],
    messages: <MessageType[]>[
      { id: 1, text: 'Om' },
      { id: 2, text: 'Ah' },
      { id: 3, text: 'Hum' },
    ],
  },
}

export const addPost = () => {
  const newPost: PostType = { id: 5, text: state.profilePage.newPostText, like: 10 }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText =''
  rerenderEntireTree(state)
}

export const updateNewPostChange = (newText: string) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}
