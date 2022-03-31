import React from 'react'
import '../styles/Weather.css'

export default function Weather({ weatherInfo ,date}) {
  console.log('weather', weatherInfo)
  return (
    <div className='weather'>
      <div className='weather__info'>
        <img src={`https://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}.png`}
          alt={weatherInfo.current.weather[0].main}
        ></img>
        <ul>
          <li>
            {Math.round((weatherInfo.current.temp))}
            <sup>°C</sup>
          </li>
          <li>Humidity: {weatherInfo.current.humidity}%</li>
          <li>Wind:{Math.round(weatherInfo.current.wind_speed * 3.6)} km/h</li>
        </ul>
      </div>
      <div className='weather__detail'>
        <h3>Quinta Normal, CL</h3>
        <p className='other-info__clouds'>{date}</p>
        <p className='other-info__clouds'>{weatherInfo.current.weather[0].description}</p>
      </div>
    </div>
  )
}
