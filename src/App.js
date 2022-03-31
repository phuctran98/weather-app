import './App.css';
import Header from './component/Header';
import WeatherandForecast from './component/WeatherandForecast';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';

const key = '533eac37e9ad1e1e3984e2d18e63ebb9'
const fetchWeather = async (coordinates) => {
  const dataWeather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,hourly&appid=${key}&units=metric`)
  return dataWeather
}

const fetchGeoCoding = async (address) => {
  const geoCoding = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${address}&limit=1&appid=${key}`)
  return geoCoding.data
}
function App() {
  const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({})



  const getGeoCoding = async () => {
    try {
      const data = await fetchGeoCoding(address)
      const newCoordinates = {
        ...coordinates,
        lat: data[0].lat,
        lon: data[0].lon
      }
      setCoordinates(newCoordinates)
    } catch (error) {
      console.log('err', error)
    }
  }

  useEffect(() => {
    if (Object.keys(coordinates).length === 0) return

    fetchWeather(coordinates).then(response => {
      setWeatherAndForecastInfo(response.data)
      setIsLoading(false)
      console.log('main', response)
    }).catch(err => {
      console.error(err)
    })
  }, [coordinates])

  function searchCity(target) {
    setAddress(target)
    getGeoCoding()
  }
  if (isLoading) return <h2>Loading ...</h2>
  return (
    <div className="App">
      <Header searchCity={searchCity}></Header>
      {
        Object.keys(weatherAndForecastInfo).length !== 0 && <WeatherandForecast weatherInfo={weatherAndForecastInfo} />
      }
    </div>
  );
}

export default App;
