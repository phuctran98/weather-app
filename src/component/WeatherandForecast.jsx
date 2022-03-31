import React from 'react'
import Forecast from './Forecast'
import Weather from './Weather'
import '../styles/WeatherandForecast.css'

export default function WeatherandForecast({weatherInfo}) {
  const date = dateBuider(new Date())

  function dateBuider(d){
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
    const date = []
    for(let i = 0; i < 5; i++){
      if(d.getDay() + i < 7) date[i] = d.getDay() + i;
      else if(d.getDay() + i === 7) date[i] = 0;
      else if(d.getDay() + i === 8) date[i] = 1;
      else if(d.getDay() + i === 9) date[i] = 2;
      else if(d.getDay() + i === 10) date[i] = 3;
    }
    console.log(date)
    return [
      days[date[0]],
      days[date[1]],
      days[date[2]],
      days[date[3]],
      days[date[4]]
    ]
  }
  
  return (
    <div className='weatherandforecast'>
        <Weather weatherInfo={weatherInfo} date={date[0]}></Weather>
        <div className='forecastContainer'>
            <Forecast date={date[0]} weatherInfo={weatherInfo.daily[0]}/>
            <Forecast date={date[1]} weatherInfo={weatherInfo.daily[1]}/>
            <Forecast date={date[2]} weatherInfo={weatherInfo.daily[2]}/>
            <Forecast date={date[3]} weatherInfo={weatherInfo.daily[3]}/>
            <Forecast date={date[4]} weatherInfo={weatherInfo.daily[4]}/>
        </div>
    </div>
  )
}
