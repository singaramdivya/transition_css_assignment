import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UserDetails from './components/UserDetails';
import Conversation from './components/Conversation';
import ActionLauncher from './components/ActionLauncher';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <UserDetails />
          <Conversation />
          <ActionLauncher />
        </div>
      </div>
    </div>
  );
};

export default App;
