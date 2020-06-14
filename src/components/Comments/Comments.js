import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionBox from '../QuestionBox/QuestionBox';
import {withRouter} from 'react-router-dom';
class Comments extends Component{
    state = {
        question: ' ',
        comment: ' '
    }



    componentDidMount(){
        console.log(this.props);
        console.log(this.props.reduxState.feedBackName.question);
        console.log(this.props.reduxState.feedBackName);     
        console.log(this.state);
    }

    handleComment = () => {
       console.log('comment clicked');
        if(this.props.reduxState.feedBackName.question === "feeling"){            
            console.log("feeling click")
            this.setState({
                question: 'feeling'
            })            
            console.log(this.state);            
        }       
    }

    handleCommentIn = (event, text) => {
        this.setState({
            ...this.state,
            [text]: event.target.value
        })
        console.log(this.state.comment);
    }
       

    render(){
        return(
            <div>
                
                <section className="commentSection">
                   <input onChange={(event) => this.handleCommentIn(event, "comment")} placeholder="How are you feeling?"></input>
                   <button onClick={this.handleComment}>Submit</button> 
                </section>
                    
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default withRouter(connect(putReduxStateOnProps)(Comments));