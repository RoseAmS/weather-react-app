import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Managua" />
        {/* Author */}
        <div className="footer">
          <a
            href="https://github.com/RoseAmS/weather-react-app"
            target="_blank"
            rel="noreferrer"
            className="link-footer"
          >
            Open-source code
          </a>
          , by Rosa Aminta
        </div>
      </div>
    </div>
  );
}
