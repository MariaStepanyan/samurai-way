import { BrowserRouter } from 'react-router-dom'
import { SidebarContainer } from './SidebarContainer'

export default {
  component: SidebarContainer,
}

export const SidebarPage = () => {
  return (
    <BrowserRouter>
      <SidebarContainer />
    </BrowserRouter>
  )
}
