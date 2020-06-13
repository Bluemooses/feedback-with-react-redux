import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {withRouter} from 'react-router-dom';

class QuestionBox extends Component {
  state = {
    rating: " ",
    ready: false,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  nextBtnHandle = (event, name) => {
    // event.preventDefault();
    console.log("Submit clicked", this.props);
    this.props.history.push('/comments');
    switch (this.state.ready) {
      case true:
        this.props.dispatch({
          type: "NEXT_BUTTON",
          payload: this.state,
        });
      default:
        return this.state;
    }
    
    
  };

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
  render() {
    return (
      <div>
        <section className="surveySays">
          <form onSubmit={this.nextBtnHandle}>
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
