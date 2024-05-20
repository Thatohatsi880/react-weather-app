import React from 'react';
import WeatheredIcon from "./WeatheredIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }

    let apiKey = "867e25f2d83db579421a57fd8e937ec";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=
    ${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);

    return <div className="WeatherForecast">
     <div className="row">
       <div className="col">
        <div className= "WeatherForecast-day">Thu</div>
        <WeatheredIcon code="01d" size={36}/>
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">19° 
            </span>
            <span className="WeatherForecast-temperatures-min">10°
            </span>
        </div>
     </div>
     </div>
     </div>
     
    
    
}