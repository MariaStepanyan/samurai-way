import imgDimich from '../assets/images/Dimich.jpg'
// import imgAndrey from '../assets/images/Andrey.jpg'
// import imgViktor from '../assets/images/Viktor.jpg'
// import imgSasha from '../assets/images/Sasha.jpg'
// import imgValera from '../assets/images/Valera.jpg'
// import imgSveta from '../assets/images/Sveta.jpg'
// import {
//   addMessageAC,
//   dialogsReducer,
//   messageChangeAC,
// } from './dialogs-reducer'
// import { addPostAC, postChangeAC, profileReducer } from './profile-reducer'

export type Dialogprops = {
  name: string
  id: number
  img: string
}

// export type MessageType = {
//   id: number
//   text: string
// }

// export type PostType = {
//   id: number
//   text: string
//   like: number
// }

// export type friendstype = {
//   name: string
//   id: number
// }

// export type ProfilePageType = {
//   posts: PostType[]
//   newPostText: string
// }

// export type MessagesPageType = {
//   dialogs: Dialogprops[]
//   messages: MessageType[]
//   newMessageText: string
// }

// export type RootStateType = {
//   profilePage: ProfilePageType
//   messagesPage: MessagesPageType
//   sidebar: {
//     friends: friendstype[]
//   }
// }

// type AddPostAT = ReturnType<typeof addPostAC>
// type UpdatePostTextAT = ReturnType<typeof postChangeAC>
// type AddMessageTextAT = ReturnType<typeof addMessageAC>
// type UpdateMessageTextAT = ReturnType<typeof messageChangeAC>

// export type ActionType =
//   | AddPostAT
//   | UpdatePostTextAT
//   | AddMessageTextAT
//   | UpdateMessageTextAT

// export type storeType = {
//   _state: RootStateType
//   _callsuscriber: () => void
//   getState: () => RootStateType
//   subscribe: (observer: () => void) => void
//   dispatch: (action: ActionType) => void
// }

// export let store: storeType = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, text: 'Hi, how are you', like: 15 },
//         { id: 2, text: "it's my first post", like: 20 },
//       ],
//       newPostText: '',
//     },
//     messagesPage: {
//       dialogs: [
//         { name: 'Dimych', id: 1, img: imgDimich },
//         { name: 'Andrey', id: 2, img: imgAndrey },
//         { name: 'Viktor', id: 3, img: imgViktor },
//         { name: 'Sasha', id: 4, img: imgSasha },
//         { name: 'Valera', id: 5, img: imgValera },
//         { name: 'Sveta', id: 6, img: imgSveta },
//       ],
//       messages: [
//         { id: 1, text: 'Om' },
//         { id: 2, text: 'Ah' },
//         { id: 3, text: 'Hum' },
//       ],
//       newMessageText: '',
//     },
//     sidebar: {
//       friends: [
//         { name: 'Sasha', id: 1 },
//         { name: 'Sveta', id: 2 },
//         { name: 'Valera', id: 3 },
//       ],
//     },
//   },
//   _callsuscriber() {},
//   getState() {
//     return this._state
//   },
//   subscribe(observer: () => void) {
//     this._callsuscriber = observer
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//     this._callsuscriber()
//   },
// }
