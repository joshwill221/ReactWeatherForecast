import React from "react";

import cloudy from '../img/cloudy.svg';
import thunder from '../img/thunder.svg';
import rainyHeavy from '../img/rainy-6.svg';
import rainyLight from '../img/rainy-3.svg';
import snowy from '../img/snowy-6.svg';
import smog from '../img/cloudy-day-1.svg';
import sunny from '../img/day.svg';
import cloudSun from '../img/cloudy-day-3.svg';


const WeatherForecast = (props) => {

  // convert date_time from seconds to milliseconds
  const date = new Date(props.date_time * 1000);
  const day = getWeekDay(date);

  return (
    <div className="cards">
      <h1 className="card-heading">{day}</h1>
      <h5 className="card-icon">
      {/* <h5 className="py-4"> */}
        {/* <FontAwesomeIcon
          icon={getWeatherIcons(props.icon)}
          size="6x"
          style={{ color: "Grey" }}
          fixedWidth
        /> */}
        <img src={getWeatherIcons(props.icon)} height="200" alt="weather icon" />
      </h5>
      <h4 className="description">{props.description}</h4>

      <h1 className="py-2">{Math.round(props.temp)}&deg;</h1>
      <h3>
        <span className="px-4 bg-primary">
          {Math.round(props.temp_min)}&deg;
        </span>
        <span className="px-4 bg-danger">
          {Math.round(props.temp_max)}&deg;
        </span>
      </h3>
    </div>
  );
};

function getWeatherIcons(rangeId) {
  let icon;

  switch (true) {
    case rangeId >= 200 && rangeId <= 232:
      icon = thunder;
      break;
    case rangeId >= 300 && rangeId <= 321:
      icon = rainyHeavy;
      break;
    case rangeId >= 500 && rangeId <= 504:
      icon = rainyLight;
      break;
    case rangeId === 511:
      icon = snowy;
      break;
    case rangeId >= 520 && rangeId <= 531:
      icon = rainyHeavy;
      break;
    case rangeId >= 600 && rangeId <= 622:
      icon = snowy;
      break;
    case rangeId >= 701 && rangeId <= 781:
      icon = smog;
      break;
    case rangeId === 800:
      icon = sunny;
      break;
    case rangeId === 801:
      icon = cloudSun;
      break;
    case rangeId === 802:
      icon = cloudy;
      break;
    case rangeId >= 803 && rangeId <= 804:
      icon = cloudy;
      break;
    default:
      icon = cloudSun;
  }

  return icon;
}

function getWeekDay(date) {
  var weekdays = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );

  // var day = date.getDay();
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  var output;

  // If dates are equal print with Today/Tomorrow else return day of the week
  switch (date.toDateString()) {
    case today.toDateString():
      output = "Today";
      break;
    case tomorrow.toDateString():
      output = "Tomorrow";
      break;
    default:
      output = weekdays[date.getDay()];
  }

  return output;
}

export default WeatherForecast;
