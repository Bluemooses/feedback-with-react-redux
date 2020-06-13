import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../QuestionBox/QuestionBox';
import QuestionBox from '../QuestionBox/QuestionBox';

class Understanding extends Component {

    state = {
    question2: 'understanding'
    }

    componentDidMount(){
        console.log(this.state);
        this.handleUnderstanding();
    }

    handleUnderstanding = () => {    
        // console.log(this.props.reduxState.feedBack)
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state,
        })
 }//end handleFeeling   
 
    render(){
        return(
            <div>
                <h3 className="question">How well are you understanding the course material?</h3>
                <QuestionBox onSubmit={this.props.nextBtnHandle}/>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Understanding);