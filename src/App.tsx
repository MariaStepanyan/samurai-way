import React, { Component, ReactElement } from 'react'
import './App.css'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import { News } from './components/news/News'
import { Music } from './components/music/Music'
import { Settings } from './components/settings/Settings'
import { DialogsContainer } from './components/dialogs/DialogsContainer'
import { SidebarContainer } from './components/sidebar/SidebarContainer'
import { UsersContainer } from './components/users/UsersContainer'
import ProfileContainer from './components/profile/ProfileContainer'
import HeaderContainer from './components/header/HeaderContainer'
import Login from './components/login/Login'
import { getAuth } from './redux/auth-reducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppRootStateType } from './redux/redux-store'
import { initializeApp } from './redux/app-reducer'
import { Preload } from './components/common/Preload'

export type AppContainerPropsType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
  initializeApp: () => void
}
type mapStateToPropsType = {
  initialized: boolean
}

class App extends Component<AppContainerPropsType> {
  componentDidMount(): void {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preload />
    }

    return (
      <BrowserRouter>
        <div className='App'>
          <HeaderContainer />
          <SidebarContainer />
          <div className='app-wrapper-content'>
            <Route path={'/dialogs'} render={() => <DialogsContainer />} />
            <Route path={'/Profile/:userId?'} render={() => <ProfileContainer />} />
            <Route path={'/news'} render={() => <News />} />
            <Route path={'/login'} render={() => <Login />} />
            <Route path={'/music'} render={() => <Music />} />
            <Route path={'/settings'} render={() => <Settings />} />
            <Route path={'/users'} render={() => <UsersContainer />} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({ initialized: state.app.initialized })

export default compose(
  // withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)
