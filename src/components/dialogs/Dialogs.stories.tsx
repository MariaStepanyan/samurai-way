import { BrowserRouter } from 'react-router-dom'
import { Dialogs } from './Dialogs'
import { store } from '../../redux/state'

export default {
  component: Dialogs,
}

export const AllDialogs = () => {
  return (
    <BrowserRouter>
      <Dialogs state={store.getState()} />
    </BrowserRouter>
  )
}
