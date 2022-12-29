import React, { Component } from 'react'

export default class WeatherCard extends Component {
  render() {
    return (
      <div className='card'>
        <h2 className='img'><img src="../src/components/img/fonfo.jpeg" alt="fon" /></h2>
        <h2 className='rec'>{this.props.item?.dt_txt}</h2>
        <h3>{this.props.item?.weather[0].description}</h3>
        <h4>{Math.ceil(this.props.item?.main.temp-273.15)}°C</h4>

      </div>
    )
  }
}
