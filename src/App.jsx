import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import WeatherCards from './components/WeatherCards'
import Loading from './components/Loading'

function App() {
  const [coords, setCords] = useState()
  const [wether, setwether] = useState()
  const [temp, setTemp] = useState()
  


  useEffect(() => {
 
  const success= pos =>{ setCords(pos)
      const obj ={
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCords(obj)
  
    }
    // llama do de la api  obtengo (log y lat)  {useEfect}= success
    navigator.geolocation.getCurrentPosition(success)

}, [])

  console.log(coords);
    //petision del clima 
  useEffect ( () =>{
      console.log(coords);

    if(coords){
        // peticion weather  {useEfect}
    const APIKEY = '2198cfaee3fa6e4d282862e423c22a28'
    const URL  = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    
    axios.get(URL)
      .then (res => {
        const celcius = (res.data.main.temp - 273.15).toFixed(1);
        const farenheit = (celcius * 9 / 5 +32).toFixed(1)
        setTemp({celcius, farenheit})
        setwether(res.data) })

      .catch (err => console.log(err))
  }
  }, [coords] )
  console.log(wether);

  return (
    <div className="App">
       
      {
    temp ?
     <WeatherCards wether={wether} temp={temp}/>
      :
      <Loading />     
      }
    </div>
  )
}

export default App
