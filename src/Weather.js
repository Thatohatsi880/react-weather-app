import React, { useState, useEffect } from "react";
import WeatheredInfo from "./WeatheredInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Component mounted, default city: ${city}`);
    search(city);
  }); // This will run once when the component mounts and whenever the city changes

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
      iconUrl: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
      wind: weatherData.wind.speed,
      city: weatherData.name,
    });
  }

  function search(city) {
    if (!city) {
      console.log("No city provided, skipping search");
      return;
    }
    console.log(`Searching for city: ${city}`);
    const apiKey = "a867e25f2d83db579421a57fd8e937ec";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    console.log(`API URL: ${apiUrl}`);
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Error fetching the weather data: ", error);
        setError("Error fetching the weather data. Please try again later.");
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Form submitted, searching for city: ${city}`);
    search(city);
  }

  function handleCityChange(event) {
    console.log(`City input changed to: ${event.target.value}`);
    setCity(event.target.value);
  }

  if (error) {
    return <div className="Weather">Error: {error}</div>;
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
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
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
