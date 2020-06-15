import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
   //If DB needs access to all 3 comments/update DB with comment0/1/2
   //for the purpose of this assignment and congruity for your debugging
   //Set comments to the first comment box.
class Review extends Component {
    //We have to access INDEXES to get the data we want.
    feeling = this.props.reduxState.feedBack[0];
    understanding = this.props.reduxState.feedBack[1];
    support = this.props.reduxState.feedBack[2];
    comment = this.props.reduxState.userComment[0];

    //Set local state to match up with our REDUCERS 
  state = {
    feeling: this.feeling,
    understanding: this.understanding,
    support: this.support,
    comments: this.comment
  }


  componentDidMount(){    
    console.log(this.state)
    console.log(this.comment);
  }

  //POST FEEDBACK DATA TO DB PUSH USER TO COMPLETE 
  submitFeedback = () => {
    console.log("NEXT", this.state);
      axios.post("/results", this.state)
        .then(response => {
          console.log(response);          
        }).catch(err => {
          console.log("axios POST err", err);
        });
        this.props.history.push('/complete');
  }
  

  render() {   
  
    return(
      <div>
        <h2>Review Your Feedback</h2>
        <ul>
          <li> Feeling Rating: {this.state.feeling} </li>
          <li> Understanding Rating: {this.state.understanding} </li>
          <li> Support Rating: {this.state.support} </li>
          <li> Comments For Instructor: {this.state.comments} </li>
        </ul>
        <button onClick={this.submitFeedback} type="submit">Submit Feedback</button>
      </div>
    )

  }
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(Review);
