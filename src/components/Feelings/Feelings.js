import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionBox from '../QuestionBox/QuestionBox';
// import { Redirect } from 'react-router-dom';
// import Comments from '../Comments/Comments';
// import { Route } from 'react-router-dom';

class Feelings extends Component{

    state = {
    question: 'feeling'
    }

    componentDidMount(){
        console.log(this.state);
        this.handleFeeling(); 
    }

    handleFeeling = () => {    
        console.log(this.props.reduxState.feedBack)
        this.props.dispatch({
            type: 'ADD_FEELING',
            // name: 'feeling',
            payload: this.state
        })             
 }//end handleFeeling   
 
    render(){
        return(
            <div>
                <h3 className="question">How are you feeling today?</h3>
                <QuestionBox onClick={this.props.nextBtnHandle}/>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feelings);