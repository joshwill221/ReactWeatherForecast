import React from "react";
import "./WeatherForm.css";

const Form = (props) => {
  return (
    <div>
      <h1>Weekly Weather Forecast</h1>
      <h5>Enter your City and Country</h5>
      <div className="form">
        <div>{props.error ? error() : null}</div>
        <form onSubmit={props.loadWeather}>
          <div className="form">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="City"
            />
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="Country"
            />
            <button className="btn btn-primary">Get Weather</button>
          </div>
        </form>
      </div>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country
    </div>
  );
}

export default Form;
