import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Feelings from "../Feelings/Feelings";
import Comments from "../Comments/Comments";
// import Understanding from "../Understanding/Understanding";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <Header />
          </header>
          <Route path="/" component={Feelings} />
          <Route path="/comments" component={Comments} />
          {/* // <Route path="/review" component={Review} */}          
          {/* <Route path="/review" component={Review} */}
          {/* <Route path="/comments" component={Comments} */}
          {/* <Route path="/comments" component={Comments} */}


        </Router>
        <br />
      </div>
    );
  }
}

export default App;
