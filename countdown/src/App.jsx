import React, { Component } from 'react';
import './App.css';
//ES6 class
class App extends Component {

    render() {
        return (
            //adding structure for the page
            <div className="App">
                <div className="App-title">Countdown to Romance in Rome, 2017!</div>
            <div>
                    <div className="Clock-days">14 Days</div>
                    <div className="Clock-hours">30 Hours</div>
                    <div className="Clock-minutes">15 Minutes</div>
                    <div className="Clock-seconds">20 Seconds</div>
                </div>
                <div>
                    <input placeholder='new date' />
                    <button>Submit</button>
                </div>

            </div>
        )
    }
}

export default App;
//Thanks to create-react-app when we save the project it auto refreshes in localhost:8080