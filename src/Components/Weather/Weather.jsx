import React, { Component } from 'react';
import './Weather.css';
import { Link } from "react-router-dom";
import WeatherApi from './WeatherApi';

export default class Weather extends Component {
      
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      }
    }
  
    _handleChange = (event) => {
      console.log(event.target.value);
      this.setState({ value: event.target.value });
      
    }
   render(){
  
  return (
    <>
    <div className='weather-text'>
          <h1>الطقس</h1>
          </div>  
          <Link to={"/"} className="menu__link"><a href="#" class="btn btn-white btn-animate" id='menu_link_back'>عودة</a></Link>

         <WeatherApi />
</>
     
     
  )
    }
}

