import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="weather-forecast-date">{day()}</div>
      <div className="weather-forecast-icon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
          width={45}
        />
      </div>
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temp-max"> {maxTemp()} </span>
        <span className="weather-forecast-temp-min"> {minTemp()} </span>
      </div>
    </div>
  );
}
