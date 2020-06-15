import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Feelings from "../Feelings/Feelings";
import Comments from "../Comments/Comments";
import Understanding from "../Understanding/Understanding";
import {withRouter, Redirect} from 'react-router-dom';
import Supported from "../Supported/Supported";
import Review from "../Review/Review";
import Complete from "../Complete/Complete";
// import Understanding from "../Understanding/Understanding";

class App extends Component {

  state={
    ready: true
  }

  componentDidMount(){
    
  }
  render() {
    

    return (      
      <div className="App">
        <Router>
          < Redirect to = '/feelings' / >
          <header className="App-header">
            <Header />
          </header>
          
          <Route path="/feelings" component={Feelings} />
          <Route path="/understanding" component={Understanding} />          
          <Route path="/supported" component={Supported} />
          <Route path="/review" component={Review} />
          <Route path="/comments" component={Comments} />
          <Route path="/complete" component={Complete} />

        </Router>
        <br />
      </div>
    );
  }
}

export default App;
