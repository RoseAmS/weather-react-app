import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherFeels from "./WeatherFeels";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>
        {props.info.city}, {props.info.country}
      </h2>

      <div className="row">
        <div className="col">
          {" "}
          <FormattedDate date={props.info.date} />
        </div>
        <div className="col-5">
          <strong>Current details</strong>
        </div>
      </div>
      <h3>{props.info.description}</h3>

      <div className="row">
        <div className="col">
          <div className="clearfix temperature">
            <span className="icon-main">
              <div className="img-weather">
                <WeatherIcon
                  code={props.info.icon}
                  alt={props.info.description}
                  width={65}
                />
              </div>
            </span>

            <span>
              <WeatherTemperature
                celsius={props.info.temperature}
                // feels={props.info.feels}
              />
            </span>
          </div>
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col">Feels</div>
            <div className="col">
              <span>
                {" "}
                <WeatherFeels data={props.info.feels} unit="celsius" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">Humidity</div>
            <div className="col">
              <span>{props.info.humidity}</span>%
            </div>
          </div>
          <div className="row">
            <div className="col">Wind</div>
            <div className="col">
              <span>{props.info.wind}</span> km/h
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
