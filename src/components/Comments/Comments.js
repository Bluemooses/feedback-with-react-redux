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
        toSupported: false
    }

    //axios post request

    // componentDidMount(){
        
    // }

    handleComment = (event) => {
       console.log('comment clicked');
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
                toUnderstanding: false,
                toSupported: true
            })
            
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
        if(this.state.toUnderstanding === true){
            return <Redirect to ='/understanding' />            
        }
        if(this.state.toSupported === true){
            return <Redirect to='/supported' />
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