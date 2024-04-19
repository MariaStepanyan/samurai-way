import React, { ReactElement } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { News } from './components/news/News'
import { Music } from './components/music/Music'
import { Settings } from './components/settings/Settings'
import { DialogsContainer } from './components/dialogs/DialogsContainer'
import { SidebarContainer } from './components/sidebar/SidebarContainer'
import { UsersContainer } from './components/users/UsersContainer'
import ProfileContainer from './components/profile/ProfileContainer'
import HeaderContainer from './components/header/HeaderContainer'
import Login from './components/login/Login'

function App() {
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

export default App
