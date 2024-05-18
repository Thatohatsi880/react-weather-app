import React, { useState } from "react";
import WeatheredInfo from "./WeatheredInfo";
import axios from 'axios';
import "./Weather.css";

export default function Weather(props){
    const[weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt* 1000),
        description: response.data.weather[0].description,
        precipitation: response.data.main.precipitation,
        iconUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=',
        wind: response.data.wind.speed,
        city: response.data.name
    });
   
}

function search(){
    const apiKey = "a867e25f2d83db579421a57fd8e937ec";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=
     ${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
    }

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
 setCity(event.target.value);

}
    
// console.log(response.data);
if (weatherData.ready){
    return(
    <div className="Weather">
    <form onSubmit={handleSubmit}>
        <div className="row">
          <div className = "col-9">
         <input 
          type="search" 
          placeholder= "Enter a city.."
          className="form-control"
          autoFocus="on"
          onChange={handleCityChange}
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
    <WeatheredInfo data={weatherData}/>
    </div>
);
   }else{
    search();
    return "Loading...";
      
    }
}