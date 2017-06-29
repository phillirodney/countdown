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
    
    //this function adds a 0 infront of any number less than 10 just to clean up the code!
    leading0(num) {
        //cleanup code with ternary expression
        return num < 10 ? '0' + num : num;

       /* if (num <10) {
           return '0' + num;     
    }
                return num;*/
    }
 
     
    //runs after the component has completely rendered onto the application.
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
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
    </div>
        )
    }
}

export default Clock;