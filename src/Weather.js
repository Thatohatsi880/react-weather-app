import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from 'axios';
import "./Weather.css";

export default function Weather(props){
    const[weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response){
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        precipitation: response.data.main.precipitation,
        description: response.data.weather[0].description,
        iconUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=',
        wind: response.data.wind.speed,
        date: new Date(response.data.dt* 1000),
        city: response.data.name
    });
   
}
// console.log(response.data);
if (weatherData.ready){
    return(
        <div className="Weather">
    <form>
        <div className="row">
          <div className = "col-9">
         <input 
          type="search" 
          placeholder= "Enter a city.."
          className="form-control"
          autoFocus="on"
       /> 
       </div>
       <div className = "col-3">
        <input 
           type="submit" 
           value="Search" 
           className="btn btn-primary w-100"
           />
        </div>
        </div>
    </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
            <FormattedDate date={weatherData.date}/>
        </li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      
     <div className="row mt -6">
        <div className="col-6">
        <div className="clearfix">
            <br/>
          <img 
          src= {weatherData.iconUrl}
          alt={weatherData.description}
          />
         <span className="temperature">{Math.round
         (weatherData.temperature)}</span>
         <span className="unit">°C</span>
        </div>
        </div>
        <div className="col-6">
            <br/>
            <ul>
                <li> Precipitation: {weatherData.precipitation}%</li>  
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
            </ul>
         </div>
       </div>
    </div>
    );
}else{
 const apiKey = "a867e25f2d83db579421a57fd8e937ec";
 let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=
     ${props.defaultcity}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);

      return "Loading...";
    }}