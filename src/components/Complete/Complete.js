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
                <p>YO FROM COMPLETE!</p>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Complete);