import { BrowserRouter } from 'react-router-dom'
import { Dialogs } from './Dialogs'

export default {
  component: Dialogs,
}

type Dialogprops = {
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

type MessageType = {
  id: number
  text: string
}

const messages: MessageType[] = [
  { id: 1, text: 'Om' },
  { id: 2, text: 'Ah' },
  { id: 3, text: 'Hum' },
]
export const AllDialogs = () => {
  return (
    <BrowserRouter>
      <Dialogs dialogs={dialogs} messages={messages} />
    </BrowserRouter>
  )
}
