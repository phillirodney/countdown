import React, {Component} from 'react';
import './App.css';

class Clock extends Component{
    constructor(props) {
        super(props); 
        this.state = {
                days: 0, 
                hours: 0, 
                minutes: 0, 
                seconds: 0,
        }
    }
    
    getTimeDifference(deadline) {
        //use let for variables that do need updating
        //use const for variables that don't need updating
        const time = Date.parse(deadline) - Date.parse(new Date());
        cont seconds = Math.floor((time/1000) %60);
        cont minutes = Math.floor((time/1000/60) %60);
        cont hours = Math.floor((time/1000*60*60) %24);
        cont days = Math.floor((time/1000*60*60*24));

        this.setState({days: days});
        
    }
    render() {
        this.getTimeDifference(this.props.deadline);

        return (
    <div>
        <div className="Clock-days">{this.state.days} days</div>
        <div className="Clock-hours">{this.state.hours} hours</div>
        <div className="Clock-minutes">{this.state.minutes} minutes</div>
        <div className="Clock-seconds">{this.state.seconds} seconds</div>
    </div>
        )
    }
}

export default Clock;