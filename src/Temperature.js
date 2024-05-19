import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  const celsius = props.celsius;
  const fahrenheit = (celsius * 9) / 5 + 32;

  const toggleUnit = () => {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
  };

  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {unit === "celsius" ? Math.round(celsius) : Math.round(fahrenheit)}
      </span>
      <span className="unit" onClick={toggleUnit}>
        {unit === "celsius" ? "°C" : "°F"}
      </span>
    </div>
  );
}
