import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionBox from '../QuestionBox/QuestionBox';
import {withRouter} from 'react-router-dom';

class Comments extends Component{


 
    render(){
        return(
            <div>                
                {/* <QuestionBox onClick={this.props.nextBtnHandle}/> */}
                <p>yo</p>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default withRouter(connect(putReduxStateOnProps)(Comments));