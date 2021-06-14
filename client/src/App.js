import React from 'react';
import './App.css'
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

function App() {
  return ( 
    <>
    <Router>
     <ReactNotification isMobile={true} breakpoint={768} />
      <div className="container-fluid movie-app">
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
