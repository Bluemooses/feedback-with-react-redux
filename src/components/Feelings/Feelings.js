import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Feelings extends Component{

    state={
        rating: 0,
        ready: false
    }

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = () => {
        // this.props.dispatch({

        // })
    }

    handleChange(event){
        this.setState({
            rating: event.target.value
        });
        console.log("rating:", event.target.value)
    }


    render(){
        return(
            <div>
                <section className="surveySays">
                    <form>
                        <h3 className="question">How are you feeling today?</h3>
                            <label>
                                <input type="radio" value="1" checked={this.state.rating === "1"} onChange={this.handleChange} />
                                1
                            </label>
                            <label>
                                <input type="radio" value="2" checked={this.state.rating === "2"} onChange={this.handleChange}/>
                                2
                            </label>                        
                            <label>
                                <input type="radio" value="3" checked={this.state.rating === "3"} onChange={this.handleChange} />
                                3
                            </label>                        
                            <label>
                                <input type="radio" value="4" checked={this.state.rating === "4"} onChange={this.handleChange}/>
                                4
                            </label>
                            <button className="nextBtn" disabled={!this.state.ready} onClick={this.nextBtnHandle}></button>
                    </form>
                    
                    

                </section>
            </div>
        )
    }
}

export default connect()(Feelings);