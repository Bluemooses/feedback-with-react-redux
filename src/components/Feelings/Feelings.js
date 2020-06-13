import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../QuestionBox/QuestionBox';
import QuestionBox from '../QuestionBox/QuestionBox';

class Feelings extends Component{

    state = {
    name: 'feeling'
    }

    componentDidUpdate(){
        console.log(this.state);
        this.handleFeeling();

                // this.props.nextBtnHandle();

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
                <QuestionBox onSubmit={this.props.nextBtnHandle}/>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feelings);