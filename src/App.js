import React from "react";
import Weather from './Weather';
import './App.css';

export default function App() {
  return( 
  <div className="App">
     <div className="container">
   <Weather/>
    <footer>
      This project was coded by {" "}
      <a href="https://dev.to/thatohatsi880" target="_blank" rel="noreferrer">
        Thatohatsi Tilodi
       
      </a> {" "}
      and is {" "}
      <a href="https://github.com/Thatohatsi880/
        react-weather-app"
        target="blank"
        className=""
      >
        open-sourced on GitHub
      </a>
  </footer>
</div>
</div>
  )
}


