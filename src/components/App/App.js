import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">       
          <Router>
            <header className="App-header">
               <Header />
                               
            </header>
          </Router>    
        <br/>
      </div>
    );
  }
}

export default App;
