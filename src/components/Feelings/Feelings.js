import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../QuestionBox/QuestionBox';
import QuestionBox from '../QuestionBox/QuestionBox';

class Feelings extends Component{

  


    render(){
        return(
            <div>
                <h3 className="question">How are you feeling today?</h3>
                <QuestionBox />
            </div>
        )
    }
}

export default connect()(Feelings);