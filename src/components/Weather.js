import React from 'react';

class WeatherOutput extends React.Component{
    
      state = {
      Weather: [],
      Temp: [],
      }
    
    componentDidMount(){
    this.fetchWeather();
  }

    fetchWeather = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=95913b5528a0605b7b6f69b5b02b53f5&units=metric')
      .then(response => response.json())
      .then((WeatherData) => {
        this.setState({Weather: WeatherData.weather[0].description})
         this.setState({Icon: WeatherData.weather[0].icon})
        this.setState({Temp: WeatherData.main.temp});
      })  
        
      
  }
    
       render() {
        const imglink = `http://openweathermap.org/img/w/${this.state.Icon}.png`;

        return(
           <div className="weatherWrapper">
              <h1 className = "weatherHeadline"> STHLM WEATHER </h1> 
              <img className= "weatherImage" src={imglink} alt= "imageIcon"/>
              <p>Weather: {this.state.Weather}</p>
              <p>Temp: {this.state.Temp} ℃ </p>
          </div>
        )
    }

}

export default WeatherOutput;
    
    
    

