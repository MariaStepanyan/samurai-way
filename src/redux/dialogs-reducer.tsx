import { ActionType, MessageType, MessagesPageType } from './state'

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export const dialogsReducer = (state: MessagesPageType, action: ActionType) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessageType = {
        id: 4,
        text: action.newMessageText,
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText
      return state
    default:
      return state
  }
}

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
