import React from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import Forecast from "./components/WeatherForecast";
import Form from "./components/WeatherForm";

const API_key = "baee18bd9254b7035c03d7382ddec25e";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: undefined,
      country: undefined,
      days: [],
      loaded: false,
      error: false
    };
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call_current = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_key}`
    );

    const responseCurrent = await api_call_current.json();

    let lat = responseCurrent.coord.lat;
    let long = responseCurrent.coord.lon;

    if (city && country) {
      // Call forecast API using lat & long returned from current API
      const api_call_forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude={current,minutely,hourly}&appid=${API_key}`
      );

      const responseForecast = await api_call_forecast.json();
      // console.log(responseForecast);

      // Set Current Values
      this.setState({
        city: city,
        country: country,
        days: responseForecast.daily,
        loaded: true,
        error: false
      });
    }
    else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    if (!this.state.loaded) {
      return <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error} />
      </div>
    }
    else {
      return (
        <div className="App">
          <Form loadWeather={this.getWeather} error={this.state.error} />
          <div className="container">
            {this.state.days.map((day) => {             
                // Return the element. Also pass key
                return <Forecast
                  key={day.dt}
                  date_time={day.dt}
                  temp={day.temp.day}
                  temp_min={day.temp.min}
                  temp_max={day.temp.max}
                  description={day.weather[0].description}
                  icon={day.weather[0].id}
                />
              })
            }
          </div>
        </div>
      );
        }
  }
}

export default App;
