import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

export type Dialogprops = {
  name: string
  id: number
}

const dialogs: Dialogprops[] = [
  {
    name: 'Dimych',
    id: 1,
  },
  {
    name: 'Andrey',
    id: 2,
  },
  {
    name: 'Viktor',
    id: 3,
  },
  {
    name: 'Sasha',
    id: 4,
  },
  {
    name: 'Valera',
    id: 5,
  },
  {
    name: 'Sveta',
    id: 6,
  },
]

export type MessageType = {
  id: number
  text: string
}

const messages: MessageType[] = [
  { id: 1, text: 'Om' },
  { id: 2, text: 'Ah' },
  { id: 3, text: 'Hum' },
]

export type PostType = {
  id: number
  text: string
  like: number
}

const posts: PostType[] = [
  { id: 1, text: 'Hi, how are you', like: 15 },
  { id: 2, text: "it's my first post", like: 20 },
]

ReactDOM.render(
  <App dialogs={dialogs} messages={messages} posts={posts}/>,
  document.getElementById('root')
)
