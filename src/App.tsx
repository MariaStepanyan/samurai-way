import React from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import { News } from './components/news/News'
import { Music } from './components/music/Music'
import { Settings } from './components/settings/Settings'
import { storeType } from './redux/state'

type AppProps = {
  store: storeType
  dispatch: (action: any) => void
}

function App(props: AppProps) {
  const { store, dispatch } = props

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Sidebar state={store.getState()} />
        <div className='app-wrapper-content'>
          <Route
            path={'/dialogs'}
            render={() => <Dialogs state={store.getState()} />}
          />
          <Route
            path={'/Profile'}
            render={() => (
              <Profile state={store.getState()} dispatch={dispatch} />
            )}
          />
          <Route path={'/news'} render={() => <News />} />
          <Route path={'/music'} render={() => <Music />} />
          <Route path={'/settings'} render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
