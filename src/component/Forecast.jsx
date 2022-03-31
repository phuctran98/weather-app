import React from 'react'
import '../styles/Forecast.css'
export default function Forecast({ date, weatherInfo }) {
  return (
    <div className='forecast'>
      <p>{date}</p>
      <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`}></img>
      <div className='degree'>
        <div>
          {Math.round(weatherInfo.temp.max)}
          <sup>°</sup>
        </div>
        <div>
        {Math.round(weatherInfo.temp.min)}
          <sup>°</sup>
        </div>
      </div>
    </div>
  )
}
