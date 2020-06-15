import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

class Complete extends Component{


    //YOU MADE IT THIS FAR!  NICE.
    state = {
    complete: false
    }

    componentDidMount(){
        console.log(this.state);
        console.log(this.props.reduxState);
    }
    //Restart button DISPATCH to set REDUCERS empty
    restart = () => {
        this.setState({
            complete: true
        })
        this.props.dispatch({
            type: "CLEAR_FEEDBACK"
        })
    }

 
    render(){
        if(this.state.complete === true){
            return <Redirect to = '/feelings' />
        }
        return(
            <div>
                <p>Thank you for your FEEDBACK!</p>
                < img src = "https://media.giphy.com/media/3OBg5pc9KnENjuwTDV/giphy.gif" />
                <button onClick={this.restart}>Restart</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Complete);

