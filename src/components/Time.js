import React from 'react';
import UsefulStuff from './usefulstuff'

class Time extends React.Component{

    state = {
        localTime: '',
    }



showTime = () =>{
    let todaysTime = new Date ();
    let h = todaysTime.getHours();
    let m = todaysTime.getMinutes();
    let s = todaysTime.getSeconds();
    h = UsefulStuff.addZero(h);
    m = UsefulStuff.addZero(m);
    s = UsefulStuff.addZero(s);
    let time = `${h} : ${m} : ${s}`;
    this.setState({ localTime: time });
}
  
  render(){
    setTimeout(this.showTime, 500);
    return(
       <div className="timeWrapper">
          <h1 className = "timeHeadline"> STOCKHOLM TIME </h1>
        <p>{this.state.localTime}</p>
      </div>
    )
  }
}


export default Time;

