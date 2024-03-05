import React from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Profile } from './components/profile/Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import { News } from './components/news/News'
import { Music } from './components/music/Music'
import { Settings } from './components/settings/Settings'
import { DialogsContainer } from './components/dialogs/DialogsContainer'
import { SidebarContainer } from './components/sidebar/SidebarContainer'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <SidebarContainer />
        <div className='app-wrapper-content'>
          <Route path={'/dialogs'} render={() => <DialogsContainer />} />
          <Route path={'/Profile'} render={() => <Profile />} />
          <Route path={'/news'} render={() => <News />} />
          <Route path={'/music'} render={() => <Music />} />
          <Route path={'/settings'} render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
