import { BrowserRouter } from 'react-router-dom'
import { Dialogs } from './Dialogs'
import { store } from '../../redux/state'

export default {
  component: Dialogs,
}

export const AllDialogs = () => {
  const dispatch = store.dispatch
  return (
    <BrowserRouter>
      <Dialogs state={store.getState()} dispatch={dispatch} />
    </BrowserRouter>
  )
}
