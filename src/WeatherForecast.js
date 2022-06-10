import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-date">Tue</div>
          <div className="weather-forecast-icon">
            <WeatherIcon code="01d" alt="cloudy" width={50} />
          </div>
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-temp-max"> 18° </span>
            <span className="weather-forecast-temp-min"> 12° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
