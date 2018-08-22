import React from 'react';
import Todo from './Todo';
import WeatherOutput from './Weather';
import Time from './Time';
import CurrencyConverter from './Currency';
import TimerOutput from './Timer';
import '../App.css';


class App extends React.Component{


  render() {
    return (
      <div className="App">
          <header className="App-header">
          <h1 className="App-title">STOCKHOLM DASHBOARD</h1>
          </header>
          <Time />
        
        <div className="Wrapper">
          <WeatherOutput />
          <Todo />
          <TimerOutput />
          <CurrencyConverter />
        </div>

      </div>
      
      
      );

  }

}


export default App;
