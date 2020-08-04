import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const WeatherCurrent = (props) => {
  return (
    <div className="container ">
      <div className="cards">
        <h1>
          {props.city}
        </h1>
        <h5 className="py-4">
        <FontAwesomeIcon
          icon={faBolt}
          size="6x"
          // style={{ color: "yellow" }}
          fixedWidth
        />
        </h5>
        <h1 className="py-2">{props.temp_celsius}&deg;</h1>

        {/* Show max and min temp */}
        {minMaxTemp(props.temp_min, props.temp_max)}

        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};

function minMaxTemp(min, max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  )
}

export default WeatherCurrent;
