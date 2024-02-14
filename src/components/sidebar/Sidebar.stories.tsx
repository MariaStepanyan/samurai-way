import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export default {
  component: Sidebar,
}

export const SidebarPage = () => {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  )
}
