import React from "react";
import img from "../img/weather-icons/clear.svg"

function CurrentWeather(){
  return(
    <div className="content">
      <img src={img}></img>
      <h2>Description</h2>
      <p className="firstPara"><span className="temp">Temperature </span>10 ْ to 15 ْC</p>
      <p><span className="a">Humidity </span>78% <span className="a">Pressure </span>1008.48</p>
    </div>
  )
}


function WeatherItem(){
  return(
    <div>
      
    </div>
  )
}


export {CurrentWeather,WeatherItem};
