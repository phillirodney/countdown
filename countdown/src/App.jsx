import React, { Component } from 'react';
import './App.css';
//ES6 class
class App extends Component {

    constructor(props) {
        super(props); 
        this.state = {
                deadline: 'July 29, 2017'
        }
    }
    
    changeDeadline() {
        //never mutate or change state DIRECTLY
        //this.state.deadline = 'November 25, 2017' is BAD
        this.setState({deadline: 'November 25, 2017'})
        //instead we use key value pairs, stay bug free	
    }
    
    render() {
        return (
            //adding structure for the page
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
            <div className="App-title">Romance in Rome!</div>
                <div>
                    <div className="Clock-days">14 Days</div>
                    <div className="Clock-hours">30 Hours</div>
                    <div className="Clock-minutes">15 Minutes</div>
                    <div className="Clock-seconds">20 Seconds</div>
                </div>
                <div>
                    <input placeholder='new date' />
                    <button onClick={() => this.changeDeadline()}>Submit</button>
                    </div>

            </div>
        )
    }
}

export default App;
//In onclick we use an ES6 anon function, handlers will loop and cause code to crash otherwise. 

//Thanks to create-react-app when we save the project it auto refreshes in localhost:8080