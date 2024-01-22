import React from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { ProfilePage } from './components/profilePage/ProfilePage'
import { Dialogs } from './components/dialogs/Dialogs'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
        <Dialogs />
        {/* <ProfilePage /> */}
      </div>
    </div>
  )
}

export default App
