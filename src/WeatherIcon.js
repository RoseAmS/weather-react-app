import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/clear-day.svg",
    "01n":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/clear-night.svg",
    "02d":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/partly-cloudy-day.svg",
    "02n":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/partly-cloudy-night.svg",
    "03d":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/cloudy.svg",
    "03n":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/cloudy.svg",
    "04d":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/overcast-day.svg",
    "04n":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/overcast-night.svg",
    "09d":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/drizzle.svg",
    "09n":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/drizzle.svg",
    "10d":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/extreme-rain.svg",
    "10n":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/extreme-rain.svg",
    "11d":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/thunderstorms.svg",
    "11n":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/thunderstorms.svg",
    "13d":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/snow.svg",
    "13n":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/snow.svg",
    "50d":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/tornado.svg",
    "50n":
      "https://raw.githubusercontent.com/RoseAmS/weather-icons/dev/production/fill/svg/tornado.svg",
  };

  const newIcon = codeMapping[props.code];

  return (
    <img src={newIcon} alt={props.alt} title={props.alt} width={props.width} />
  );
}
