import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const name = "Bangkok"
  const apikey="cf649fdf91c4eab7c28487ed5c016f3e"
  const [city,setCity] = useState({})

  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCity(data)
    })
  },[])
  return (
    <div className='App'>
      <section>
        <div className='location'>
          <h1 className='city'>Bangkok</h1>
          <p className='state'>TH</p>
        </div>
        <div className='card'>
          <div className='weather'>
            <h1>28</h1>
            <small>max:37, min:20</small>
          </div>
          <div className='info'>
            <div className='status'>อากาศดี</div>
            <div className='humidity'>100</div>
            <div className='wind'>4.0</div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default App;
