import React from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { ProfilePage } from './components/profilePage/ProfilePage'
import { Dialogs } from './components/dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import { News } from './components/news/News'
import { Music } from './components/music/Music'
import { Settings } from './components/settings/Settings'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path={'/dialogs'} component={Dialogs} />
          <Route path={'/profilePage'} component={ProfilePage} />
          <Route path={'/news'} component={News} />
          <Route path={'/music'} component={Music} />
          <Route path={'/settings'} component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
