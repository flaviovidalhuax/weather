import React, { useState } from 'react'





const WeatherCards = ({wether, temp}) => {
  const [isCelsius, setisCelsius] = useState(true)
  const changeTemperature=()=> setisCelsius(!isCelsius)

  return (
  <article className='card'>
      <h1 className='card__title'>Weather</h1>
      <h2 className='second_title'>{`${wether?.name}, ${wether?.sys.country}`}</h2>
      
    <section className='card_firt-section'>
      <img className='card_icon' src={wether ? `https://openweathermap.org/img/wn/${wether?.weather[0].icon}@4x.png`: ''} alt="" />
    </section>

      <section className='card_second-section'>
        <h3 className='second_item'>{wether?.weather[0].description}</h3>
        <ul className='second_list'>
          <li className='second_item'><span className='second_span'>Wind spind: </span>{wether?.wind.speed} m/s</li>
          <li className='second_item'><span className='second_span'>Cloud: </span>{wether?.clouds.all} %</li>
          <li className='second_item'><span className='second_span'>Presure: </span>{wether?.main.pressure} hPa</li>
        </ul>
      </section>
      <h3 className='card_temperature'>Temperature: {isCelsius ? `${temp?.celcius} ºC`: `${temp?.farenheit} ºF` } </h3>
      <button className='card_btn' onClick={changeTemperature}>{isCelsius ? 'change to ºF': 'change to ºC'}</button>
  </article>
  )
}

export default WeatherCards