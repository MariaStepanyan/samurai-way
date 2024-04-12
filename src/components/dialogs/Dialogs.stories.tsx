import { BrowserRouter } from 'react-router-dom'
// import { store } from '../../redux/state'
import { DialogsContainer } from './DialogsContainer'

export default {
  component: DialogsContainer,
}

export const AllDialogs = () => {
  // const dispatch = store.dispatch
  return (
    <BrowserRouter>
      {/* <DialogsContainer /> */}
    </BrowserRouter>
  )
}
