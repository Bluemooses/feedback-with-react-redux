import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionBox from '../QuestionBox/QuestionBox';


class Complete extends Component{


    //YOU MADE IT THIS FAR!  NICE.
    state = {
    complete: true
    }

    componentDidMount(){
        console.log(this.state);
        console.log(this.props.reduxState);
    }

 
    render(){
        return(
            <div>
                <p>Thank you for your FEEDBACK!</p>
                < img src = "https://media.giphy.com/media/3OBg5pc9KnENjuwTDV/giphy.gif" />
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Complete);