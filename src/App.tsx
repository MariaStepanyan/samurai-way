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
import { Dialogprops, MessageType, PostType } from './redux/state'

type AppProps = {
  state: {
    profilePage: { posts: PostType[]; newPostText: string }
    messagesPage: { dialogs: Dialogprops[]; messages: MessageType[] }
  }
  addPost: () => void
  updateNewPostChange: (newText: string) => void
}

function App(props: AppProps) {
  const { posts, newPostText } = props.state.profilePage
  const { dialogs, messages } = props.state.messagesPage
  const {addPost, updateNewPostChange} = props
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
          <Route path={'/Profile'} render={() => <Profile posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostChange={updateNewPostChange}/>} />
          <Route path={'/news'} render={() => <News />} />
          <Route path={'/music'} render={() => <Music />} />
          <Route path={'/settings'} render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
