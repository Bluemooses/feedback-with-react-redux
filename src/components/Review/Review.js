import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Review extends Component {

  componentDidMount(){
    console.log("review did a thing");
  }

  render() {
  
    return(
      <div>
        <p>Review</p>
      </div>
    )

  }
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(Review);
