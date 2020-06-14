import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionBox from '../QuestionBox/QuestionBox';

class Supported extends Component {

    state = {
    question3: 'suppoted'
    }

    componentDidMount(){
        console.log(this.state);
        this.handleSupported();
    }

    handleSupported = () => {
        // console.log(this.props.reduxState.feedBack)
        this.props.dispatch({
            type: 'ADD_SUPPORTED',
            payload: this.state,
        })
 }//end handleUnderstanding   
 
    render(){
        return(
            <div>
                <h3 className="question">How well supported do you feel?</h3>
                <QuestionBox onSubmit={this.props.nextBtnHandle}/>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default (connect(putReduxStateOnProps)(Supported));