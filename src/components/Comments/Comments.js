import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionBox from '../QuestionBox/QuestionBox';
import {withRouter, Redirect} from 'react-router-dom';
class Comments extends Component{
    state = {
        question: ' ',
        comment: ' ',
        toUnderstanding: false,
        toFeelings: false,
        toSupported: false,
        toReview: false
    }

    //axios post request

    // componentDidMount(){
        
    // }

    handleComment = (event) => {
       console.log('comment clicked');
       console.log(this.state);
       event.preventDefault();
        if(this.props.reduxState.feedBackName.question === "feeling"){            
            console.log("feeling click")
            this.setState({
                question: 'feeling',
                toUnderstanding: true
            })            
            console.log(this.state);
            // this.props.history.push('/understanding');            
        }
        if(this.props.reduxState.feedBackName.question2 === "understanding"){
            console.log("understanding click");
            this.setState({
                question: 'understanding',
                toFeelings: false,
                toUnderstanding: false,
                toSupported: true
            })
        }
        if(this.props.reduxState.feedBackName.question3 === "supported"){
            console.log("supported click");
            this.setState({
                question: 'supported',
                toFeelings: false,
                toUnderstanding: false,
                toSupported: false,
                toReview: true
            })
        }
        }       
    

    handleCommentIn = (event, text) => {
        this.setState({
            ...this.state,
            [text]: event.target.value
        })
        // console.log(this.state.comment);
    }
       

    render(){
        if(this.state.toUnderstanding === true){
            return <Redirect to ='/understanding' />            
        }
        if(this.state.toSupported === true){
            return <Redirect to='/supported' />
        }
        if(this.state.toReview === true){
            return <Redirect to='/review' />
        }
      
        

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