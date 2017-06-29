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
    
    componentWillMount() {
        this.getTimeDifference(this.props.deadline);
    }
    
    componentDidMount() {
        //continually update at millisecond intervals
        setInterval(() => this.getTimeDifference(this.props.deadline), 1000);
    }
    
    getTimeDifference(deadline) {
        //use let for variables that do need updating
        //use const for variables that don't need updating
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) %60);
        const minutes = Math.floor((time/1000/60) %60);
        const hours = Math.floor(time/(1000*60*60) %24);
        const days = Math.floor(time/(1000*60*60*24));

        //this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
        this.setState({days, hours, minutes, seconds});
        //using key value shorthand syntax, one keyword will be auto recognised
    }
    render() {
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