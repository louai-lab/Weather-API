import React from "react";
import clear from "../img/weather-icons/clear.svg"

function CurrentWeather(){
  return(
    <div className="content">
      <img src={clear}></img>
      <h2>Description</h2>
      <p className="firstPara"><span className="temp">Temperature </span>10 ْ to 15 ْC</p>
      <p className="secondPara"><span className="a">Humidity </span>78% <span className="a">Pressure </span>1008.48</p>
    </div>
  )
}


function WeatherItem(){
  return(
    
      <section class="weatherItems">

        <article className="item">
          <h4>03:00</h4>
          <img className="itemImage" src={clear}/>
          <h4>8<span>C</span></h4>
        </article>

        <article className="item">
          <h4>06:00</h4>
          <img className="itemImage" src={clear}/>
          <h4>8<span>C</span></h4>
        </article>

        <article className="item">
          <h4>09:00</h4>
          <img className="itemImage" src={clear}/>
          <h4>2<span>C</span></h4>
        </article>

        <article className="item">
          <h4>012:00</h4>
          <img className="itemImage" src={clear}/>
          <h4>6<span>C</span></h4>
        </article>

        <article className="item">
          <h4>02:00</h4>
          <img className="itemImage" src={clear}/>
          <h4>8<span>C</span></h4>
        </article>

        <article className="item">
          <h4>05:00</h4>
          <img className="itemImage" src={clear}/>
          <h4>9<span>C</span></h4>
        </article>

        <article className="item">
          <h4>08:00</h4>
          <img className="itemImage" src={clear}/>
          <h4>8<span>C</span></h4>
        </article>

      </section>
    
  )
}


export {CurrentWeather,WeatherItem};
