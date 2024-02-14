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
import { Dialogprops, MessageType, PostType } from '.'

type AppProps = {
  dialogs: Dialogprops[]
  messages: MessageType[]
  posts: PostType[]
}

function App(props: AppProps) {
  const { dialogs, messages, posts } = props
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route
            path={'/dialogs'}
            render={() => <Dialogs dialogs={dialogs} messages={messages} />}
          />
          <Route path={'/Profile'} render={() => <Profile posts={posts} />} />
          <Route path={'/news'} render={() => <News />} />
          <Route path={'/music'} render={() => <Music />} />
          <Route path={'/settings'} render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
