import React, { Component } from "react";
import "../App/App.css";
class Header extends Component {
  render() {
    return (
      <section className="appHeader">
        <h1 className="App-title">Feedback!</h1>
        <h4>
          <i>Don't forget it!</i>
        </h4>
      </section>
    );
  }
}

export default Header;
