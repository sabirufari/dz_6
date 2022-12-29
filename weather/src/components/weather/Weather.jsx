import axios from 'axios'
import React, { Component } from 'react'
import WeatherCard from '../weatherCard/WeatherCard'

export default class Weather extends Component {
    constructor(props){
        super(props)
        this.state={
            cityName:'',
            weather:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   handleSubmit=async()=>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&lang=ru&appid=986b8fe216175b5220a56aaa7eb7303c`)
            const data = await response.data
            await this.setState({
                weather:data,
                cityName:''
            })


        }catch(e){
          this.setState({
            weather:{
                city:{
                    name:e.response.data.message
                }
            }
          })
        }
   }
  render() {
    return (
      <div>
           <form >
            <h1> прогноз погоды на 5 дней </h1>
            <p>чтобы узнать какая погода в твоем городе в поиске запиши название данного города !</p>
            <input type="text" value={this.state.cityName} onChange={(e)=>this.setState({
                cityName:e.target.value
            })} />
            <button onClick={(e)=>{
                e.preventDefault()
                this.handleSubmit()
            }}>Search</button>
           </form>
           <h1>{this.state.weather?.city?.name}</h1>
           <div   className='main'>
           {this.state.weather?.list?.map(item=>
               <WeatherCard  key={item.dt_txt} item={item} />
            )}
            
           </div>
      </div>
    )
  }
}
