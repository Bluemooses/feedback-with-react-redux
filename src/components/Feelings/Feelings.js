import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../QuestionBox/QuestionBox';
import QuestionBox from '../QuestionBox/QuestionBox';

class Feelings extends Component{

    state = {
        question: 'feelings'
    }

    componentDidMount(){
        console.log(this.props.reduxState)
        console.log(this.props);
        this.props.dispatch({
            type: 'NEXT_BUTTON',
            name: 'feeling',
            payload: this.state
        })
    }

    render(){
        return(
            <div>
                <h3 className="question">How are you feeling today?</h3>
                <QuestionBox />
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feelings);