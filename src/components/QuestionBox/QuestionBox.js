import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {withRouter, Redirect} from 'react-router-dom';

//REUSABLE COMPONENT.  THIS QUESTION FORM IS USED THROUGHOUT THE REST OF THE PAGE.
class QuestionBox extends Component {
  state = {
    rating: " ",
    ready: false,
    redirect: false
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange
  }

  //DISPATCHES OUR RATING
  nextBtnHandle = (event, name) => {
    event.preventDefault();
    console.log("Submit clicked", this.props);
    switch (this.state.ready) {
      case true:
        this.setState({
          redirect: true
        })
        this.props.dispatch({
          type: "NEXT_BUTTON",
          payload: this.state.rating,
        });       
        return this.state.ready;
      default:
        return this.state;
    }   
  };

  //INPUT CHANGE HANDLER.
  //WHEN RADIO IS FILLED, FORM IS READY TO SUBMIT.
  handleChange(event, number) {
    console.log(this.props.reduxState);
    this.setState({
      ...this.state,
      [number]: event.target.value,
      ready: true, 
    });
    console.log("rating:", event.target.value);
  }
  //Extrapolate QuestionBox Component to access this form.
  //BUTTON IS DISABLED UNTIL A VALUE IS INPUT.
  render() {
    if(this.state.redirect === true){
      return <Redirect to="/comments" />
    }
    return (
      <div>
        <section className="surveySays">
          <form type="button" onSubmit={this.nextBtnHandle}>
            <label>
              <input
                type="radio"
                value="1"
                checked={this.state.rating === "1"}
                onChange={(event) => this.handleChange(event, "rating")}
              />
              1
            </label>
            <label>
              <input
                type="radio"
                value="2"
                checked={this.state.rating === "2"}
                onChange={(event) => this.handleChange(event, "rating")}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                value="3"
                checked={this.state.rating === "3"}
                onChange={(event) => this.handleChange(event, "rating")}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                value="4"
                checked={this.state.rating === "4"}
                onChange={(event) => this.handleChange(event, "rating")}
              />
              4
            </label>

            <label>
              <input
                type="radio"
                value="5"
                checked={this.state.rating === "5"}
                onChange={(event) => this.handleChange(event, "rating")}
              />
              5
            </label>
            <button
              type="submit"
              className="nextBtn"
              disabled={!this.state.ready}
            >
              Next
            </button>
          </form>
        </section>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(putReduxStateOnProps)(QuestionBox));
