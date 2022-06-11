import React from "react";
// import React, { useState } from "react";

export default function WeatherTemperature(props) {
  // Deleting Fahrenheit conversion - pending Global State Mgmt

  // const [unit, setUnit] = useState("celsius");

  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   setUnit("fahrenheit");
  // }

  // function showCelsius(event) {
  //   event.preventDefault();
  //   setUnit("celsius");
  // }

  // function fahrenheit() {
  //   return (props.celsius * 9) / 5 + 32;
  // }

  // if (unit === "celsius") {
  return (
    <span>
      <span>{Math.round(props.celsius)} </span>
      <span className="temp-units">
        <sup>
          <span className="active">°C</span>
          {/* {} |
            <a href="/" onClick={showFahrenheit}>
              °F
            </a> */}
        </sup>
      </span>
    </span>
  );
  // } else {
  //   return (
  //     <span>
  //       <span>{Math.round(fahrenheit())} </span>
  //       <span className="temp-units">
  //         <sup>
  //           <a href="/" onClick={showCelsius}>
  //             °C
  //           </a>
  //           {} |<span className="active">°F</span>
  //         </sup>
  //       </span>
  //     </span>
  //   );
  // }
}
