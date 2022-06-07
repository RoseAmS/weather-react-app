import React from "react";

export default function WeatherFeels(props) {
  return <span>{Math.round(props.data)}</span>;
}
