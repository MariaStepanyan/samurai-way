import { AppRootStateType } from '../../redux/redux-store'
import { SidebarType } from '../../redux/sidebar-reducer'
import { Sidebar } from './Sidebar'
import { connect } from 'react-redux'

let mapStateToProps = (state: AppRootStateType): SidebarType => {
  return { friends: state.sidebar.friends }
}

let mapDispatchToProps = () => {
  return {}
}

export const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
