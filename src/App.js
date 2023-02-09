import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const name = "Bangkok"
  const apikey="cf649fdf91c4eab7c28487ed5c016f3e"
  const [city,setCity] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  
  const fetchWeather = async () =>{
    await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`)
    .then((res) => res.json())
    .then((data) =>{
      setCity(data)
      setIsLoading(true)}  
  )}

  useEffect(()=>{
    fetchWeather();
    }
  ,[name])
  

  const convertTemp=(k)=>{
    return (k-273).toFixed(2)
  }
  return ( 
    (isLoading && 
    <div className='App'>
    <section>
      <div className='location'>
        <h1 className='city'>{city.name}</h1>
        <p className='state'>{city.sys.country}</p>
      </div>
      <div className='card'>
        <div className='weather'>
          <h1>{convertTemp(city.main.temp)}&deg;C</h1>
          <small>max : {convertTemp(city.main.temp_max)}&deg;C, min : {convertTemp(city.main.temp_min)}&deg;C</small>
        </div>
        <div className='info'>
          <div className='status'>{city.weather[0].main}</div>
          <div className='humidity'>ความชื้น = {city.main.humidity}</div>
          <div className='wind'>ความเร็วลม = {city.wind.speed}</div>
        </div>
      </div>
    </section>
  </div>)
  );
}

export default App;
