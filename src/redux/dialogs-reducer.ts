import imgDimich from '../assets/images/Dimich.jpg'
import imgAndrey from '../assets/images/Andrey.jpg'
import imgViktor from '../assets/images/Viktor.jpg'
import imgSasha from '../assets/images/Sasha.jpg'
import imgValera from '../assets/images/Valera.jpg'
import imgSveta from '../assets/images/Sveta.jpg'

const ADD_MESSAGE = 'ADD-MESSAGE'

type AddMessageACType = ReturnType<typeof addMessageAC>

type ActionType = AddMessageACType

export type Dialogprops = {
  name: string
  id: number
  img: string
}
export type MessageType = {
  id: number
  text: string
}

export type InitialStateType = typeof initialState

let initialState = {
  dialogs: [
    { name: 'Dimych', id: 1, img: imgDimich },
    { name: 'Andrey', id: 2, img: imgAndrey },
    { name: 'Viktor', id: 3, img: imgViktor },
    { name: 'Sasha', id: 4, img: imgSasha },
    { name: 'Valera', id: 5, img: imgValera },
    { name: 'Sveta', id: 6, img: imgSveta },
  ] as Dialogprops[],
  messages: [
    { id: 1, text: 'Om' },
    { id: 2, text: 'Ah' },
    { id: 3, text: 'Hum' },
  ] as MessageType[],
}

export const dialogsReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessageType = {
        id: 4,
        text: action.newMessageText,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    default:
      return state
  }
}

export const addMessageAC = (newMessageText: string) =>
  ({
    type: ADD_MESSAGE,
    newMessageText: newMessageText,
  } as const)
