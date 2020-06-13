import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Feelings extends Component{

    state={
        rating: 0,
        ready: false
    }

    componentDidMount = () => {
        this.props.dispatch({

        })
    }


    render(){
        return(
            <div>
                <section className="surveySays">
                    <form>
                        <h3 className="question">How are you feeling today?</h3>
                        <label>
                            <input type="radio" value="1" checked={false} />
                            1
                        </label>
                        <label>
                            <input type="radio" value="2" checked={false} />
                            2
                        </label>                        
                        <label>
                            <input type="radio" value="3" checked={false} />
                            3
                        </label>
                        
                        <label>
                            <input type="radio" value="4" checked={false} />
                            4
                        </label>
                    </form>
                    
                    

                </section>
            </div>
        )
    }
}

export default connect()(Feelings);