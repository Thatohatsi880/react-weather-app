import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
    <form>
        <div className="row">
          <div className = "col-9">
         <input 
          type="search" 
          placeholder= "Enter a city.."
          className="form-control"
       /> 
       </div>
       <div className = "col-3">
        <input type="submit" value="Search" className="btn 
        btn-primary" />
        </div>
        </div>
    </form>
      <h1>Johannesburg</h1>
      <ul>
        <li>Saturday 15:00</li>
        <li>Sunny</li>
      </ul>
     <div className="row">
        <div className="col-6">
          <img 
          src="data:image/png;
               base64,
               iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/
               AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/
               nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/
               8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/
               YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=" 
          alt="Mostly Sunny"

          />
          24°C
        </div>
        <div className="col-6">
            <ul>
                <li> Precipitation: 0%</li>
                <li>Humidity: 27%</li>
                <li>Wind: 13 km/h</li>
            </ul>
  <div/>
  <div/>
  </div>
  </div>
  </div>
    );
}