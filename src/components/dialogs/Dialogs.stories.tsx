import { BrowserRouter } from 'react-router-dom'
import { Dialogs } from './Dialogs'

export default {
  component: Dialogs,
}

export const AllDialogs = () => {
  return (
    <BrowserRouter>
      <Dialogs />
    </BrowserRouter>
  )
}
