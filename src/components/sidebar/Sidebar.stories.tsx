import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { store } from '../../redux/state'

export default {
  component: Sidebar,
}

export const SidebarPage = () => {
  return (
    <BrowserRouter>
      <Sidebar state= {store.getState()}/>
    </BrowserRouter>
  )
}
