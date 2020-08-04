import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCloudShowersHeavy,
  faCloudSunRain,
  faSnowflake,
  faSmog,
  faSun,
  faCloudSun,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const WeatherForecast = (props) => {

  // date_time is in seconds not milliseconds
  const date = new Date(props.date_time * 1000);
  const day = getWeekDay(date);

  return (
    <div className="cards">
      <h1>{day}</h1>
      <h5 className="py-4">
        <FontAwesomeIcon
          icon={getWeatherIcons(props.icon)}
          size="6x"
          style={{ color: "Grey" }}
          fixedWidth
        />
      </h5>
      <h4 className="py-3 description">{props.description}</h4>

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
      icon = faBolt;
      break;
    case rangeId >= 300 && rangeId <= 321:
      icon = faCloudShowersHeavy;
      break;
    case rangeId >= 500 && rangeId <= 504:
      icon = faCloudSunRain;
      break;
    case rangeId === 511:
      icon = faSnowflake;
      break;
    case rangeId >= 520 && rangeId <= 531:
      icon = faCloudShowersHeavy;
      break;
    case rangeId >= 600 && rangeId <= 622:
      icon = faSnowflake;
      break;
    case rangeId >= 701 && rangeId <= 781:
      icon = faSmog;
      break;
    case rangeId === 800:
      icon = faSun;
      break;
    case rangeId === 801:
      icon = faCloudSun;
      break;
    case rangeId === 802:
      icon = faCloud;
      break;
    case rangeId >= 803 && rangeId <= 804:
      icon = faCloud;
      break;
    default:
      icon = faCloudSun;
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
