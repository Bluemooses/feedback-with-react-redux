import React, {Component} from 'react';

class QuestionBox extends Component {

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
            rating: event.target.value,
            ready: true
        });
        console.log("rating:", event.target.value)
    }
//Extrapolate QuestionBox Component to access this form.
  render() {
    return (
      <div>
          <section className="surveySays">
                    <form onSubmit={this.nextBtnHandle}>
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
                            <button type="submit" className="nextBtn" disabled={!this.state.ready}>Next</button>
                    </form>                  
            </section>       
      </div>
    );
  }
}

export default QuestionBox;