import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Feelings from "../Feelings/Feelings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <Header />
          </header>
          <Route path="/" component={Feelings} />
        </Router>
        <br />
      </div>
    );
  }
}

export default App;
