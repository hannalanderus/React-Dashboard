import React from 'react';
import UsefulStuff from './usefulstuff'

class TimerOutput extends React.Component{
  constructor() {
    super();
    this.state = { time: {}, seconds: 10 };
    this.timer = false;
    this.resetted = true;
  }

  timeCalculator = (calculate) =>{
    let minutesCalculator = calculate % (60 * 60);
    let minutes = Math.floor(minutesCalculator  / 60);
    let secondsCalculator = (minutesCalculator  % 60);
    let seconds = Math.ceil(secondsCalculator);

    let obj = {
      "m": UsefulStuff.addZero(minutes),
      "s": UsefulStuff.addZero(seconds)
    };

    return obj;
  }

  componentDidMount = () => {
    let timeLeft = this.timeCalculator(this.state.seconds);
    this.setState({ time: timeLeft });
  }

  
  startTimer = () => {
    if (!this.timer) {
      this.timer = setInterval(this.countDown, 1000);
      this.setState({resetted: false});
    }
  }
  
  pausTimer = () => {
    clearInterval(this.timer);
    this.timer = false;
  }

  resetTimer = () => {
  clearInterval(this.timer);
  this.setState({time: 10});
  this.resetted = true;
  }

  countDown = () => {
    let seconds = this.state.seconds - 1;
    
    // Check if we're at zero.
    if (seconds <= 0) { 
      seconds = 0;
      clearInterval(this.timer);
      
     
    }

    this.setState({ time: this.timeCalculator(seconds), seconds});
  }

  render() {
    let wrapperClass = "timerWrapper";
    let timerButton = "timerButton";
    if(this.state.seconds <= 0){
      wrapperClass += " timesUp"; 
      timerButton += " timesUpButton";
    }

    return(
      <div className={wrapperClass}>
       <h1 className = "timerHeadline"> TIMER </h1>
      <p> {this.state.time.m} : {this.state.time.s}</p>
      <button className={timerButton} onClick={this.startTimer}>Start</button>
      <button className={timerButton} onClick={this.pausTimer}>Stop</button>
      <button className={timerButton} onClick={this.resetTimer}>Reset</button>
      </div>
      );
  }
}


export default TimerOutput;