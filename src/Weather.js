import React, { useState, useEffect } from "react";
import WeatheredInfo from "./WeatheredInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  useEffect(() => {
    console.log(`Component mounted, default city: ${city}`);
    search();
  }); // This will run only once when the component mounts

  function handleResponse(response) {
    console.log("API response received", response.data);
    const weatherData = response.data;
    setWeatherData({
      ready: true,
      temperature: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      date: new Date(weatherData.dt * 1000),
      description: weatherData.weather[0].description,
      precipitation: weatherData.rain ? weatherData.rain["1h"] : 0,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: weatherData.wind.speed,
      city: weatherData.name
    });
  }

  function search() {
    if (!city) {
      console.log("No city provided, skipping search");
      return;
    }
    console.log(`Searching for city: ${city}`);
    const apiKey = "a867e25f2d83db579421a57fd8e937ec";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(`API URL: ${apiUrl}`);
    axios.get(apiUrl).then(handleResponse).catch((error) => {
      console.error("Error fetching the weather data: ", error);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Form submitted, searching for city: ${city}`);
    search();
  }

  function handleCityChange(event) {
    console.log(`City input changed to: ${event.target.value}`);
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <WeatheredInfo data={weatherData} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
