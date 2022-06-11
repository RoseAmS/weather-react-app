import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ search: false });

  function handleResponse(response) {
    setWeatherData({
      search: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
    });
  }

  function search() {
    const apiKey = "34c983dcfcb96cce74bfa8ccc56e5ffe";
    const units = "metric";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

    const apiCall = `${apiUrl}?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiCall).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearch(event) {
    setCity(event.target.value);
  }

  if (weatherData.search) {
    return (
      <div className="Weather">
        <div className="card-body">
          <h1>Check your Weather</h1>

          {/* Search engine  */}
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 user-input">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control shadow-sm border-1"
                  autoFocus="on"
                  onChange={handleSearch}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value=" 🔍 "
                  className="btn btn-primary search-button"
                />

                {/* Current location icon */}
                {/* <span>
                  <i className="fa-solid fa-location-dot curr-location"></i>
                </span> */}
              </div>
            </div>
          </form>
          {/* Searched city details */}
          <WeatherInfo info={weatherData} />
          <WeatherForecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
