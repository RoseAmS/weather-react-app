import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = props.date.getDate();
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];

  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let ampm = hour >= 12 ? "PM" : "AM";
  if (hour > 12) {
    hour = hour - 12;
    if (hour < 10) {
      hour = `0${hour}`;
    }
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day}, {month} {date} - {hour}:{minutes} {ampm}
    </div>
  );
}
