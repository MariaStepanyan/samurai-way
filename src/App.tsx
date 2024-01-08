import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ProfilePage } from './components/ProfilePage';

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
