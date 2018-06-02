import React from 'react';
import Todo from './Todo';
import WeatherOutput from './Weather';
import Time from './Time';
import CurrencyConverter from './Currency';
import TimerOutput from './Timer';
/*import DebaserOutput from './Debaser';*/
/*import Container from './Container';*/
import '../App.css';


class App extends React.Component{
         
    
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title">STOCKHOLM CALLING</h1>
        </header>
        <Todo />
       <div className="Wrapper">
         <WeatherOutput />
         <Time />
         <CurrencyConverter />
         <TimerOutput />
      
      </div>
      </div>
      
      
    );
      
  }

}


export default App;
