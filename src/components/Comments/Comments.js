import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionBox from '../QuestionBox/QuestionBox';
import {withRouter, Redirect} from 'react-router-dom';
class Comments extends Component{
    //USE THIS STATE TO HELP US HANDLE COMMENTS, AND WHICH PART OF THE STACK WE ARE IN.
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

    //AFTER ROUTE VISITED, RESET LOCAL STATE AND DISPATCH COMMENTS
    handleComment = (event) => {
       console.log('comment clicked');
       console.log(this.state);

       console.log(this.props.reduxState)
       event.preventDefault();
        if(this.props.reduxState.feedBackName.question === "feeling"){            
            console.log("feeling click")
            this.setState({
                question: 'feeling',
                toUnderstanding: true
            })            
            console.log(this.state);
                     
        }
        if(this.props.reduxState.feedBackName.question2 === "understanding"){
            console.log("understanding click");
            this.setState({
                question: 'understanding',
                toUnderstanding: false,
                toSupported: true
            })
        }
        if(this.props.reduxState.feedBackName.question3 === "supported"){
            console.log("supported click");
            this.setState({
                question: 'supported',
                toUnderstanding: false,
                toSupported: false,
                toReview: true
            })
        }
        this.props.dispatch({
            type: "ADD_COMMENT",
            payload: this.state.comment
        })
        console.log(this.state.comment);
        }       
    
        //BASIC TEXT INPUT HANDLE
    handleCommentIn = (event, text) => {
        this.setState({
            ...this.state,
            [text]: event.target.value
        })
        // console.log(this.state.comment);
    }
       
    //RENDER A DIFFERENT COMPONENT BASED ON WHICH PART OF THE CHAIN WE ARE IN
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
                   <input onChange={(event) => this.handleCommentIn(event, "comment")} placeholder="Tell us more?"></input>
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