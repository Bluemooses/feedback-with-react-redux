import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
// import '../QuestionBox/QuestionBox';
import QuestionBox from '../QuestionBox/QuestionBox';

class Understanding extends Component {


    state = {
    question2: 'understanding'
    }
    //Page loaded, do a thing
    componentDidMount(){
        console.log(this.state);
        this.handleUnderstanding();
    }
    //On load, dispatch question3 payload to question reducer.
    handleUnderstanding = () => {    
        // console.log(this.props.reduxState.feedBack)
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state,
        })
 }//end handleUnderstanding   

    render(){
        return(
            <div>

                <h3 className="question">How well are you understanding the course material?</h3>
                                   <p>{JSON.stringify(this.props.reduxState)}</p>

                <QuestionBox onSubmit={this.props.nextBtnHandle}/>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default (connect(putReduxStateOnProps)(Understanding));