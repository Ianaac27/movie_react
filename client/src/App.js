import React from 'react';
import './App.css';
import Home from './pages/Home';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

function App() {
  return ( 
    <>
     <ReactNotification isMobile={true} breakpoint={768} />
    <div className="container-fluid movie-app">
      <Home />
    </div>
    </>
  );
}

export default App;
