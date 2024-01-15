import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { ProfilePage } from './components/profilePage/ProfilePage';

function App() {
  return (
    <div className="App">
     <Header />
     <Sidebar />
     <ProfilePage />
    </div>
  );
}

export default App;
