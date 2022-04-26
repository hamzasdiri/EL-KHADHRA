import React, { useState } from 'react'
import axios from 'axios';
import './WeatherApi.css';
import './Weather.css';

function WeatherApi() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
   
    
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('');
    
  }

  
  
  const search =()=>{
      searchLocation();
    
  }
  

  return (
    <div className="WeatherApi">
        
      <div className="search">
     
<input list="gouvs" name="gouv" id="gouv" value={location} onChange={event => setLocation(event.target.value)}  placeholder="اختر الولاية"/>
  <datalist id="gouvs">
    <option value="أريانة"></option>
    <option value="باجة"></option>
    <option value="بنزرت"></option>
    <option value="قابس"></option>
    <option value="ڤفصة"></option>
    <option value="جندوبة"></option>
    <option value="القيروان"></option>
    <option value="القصرين"></option>
    <option value="ڤبلي"></option>
    <option value="الكاف"></option>
    <option value="المهدية"></option>
    <option value="منوبة"></option>
    <option value="مدنين"></option>
    <option value="المنستير"></option>
    <option value="نابل"></option>
    <option value="صفاقس"></option>
    <option value="سيدي_بوزيد"></option>
    <option value="بن_عروس"></option>
    <option value="سليانة"></option>
    <option value="سوسة"></option>
    <option value="تطاوين"></option>
    <option value="توزر"></option>
    <option value="تونس"></option>
    <option value="زغوان"></option>
    
  </datalist>
      <input type="submit" id="submit" onClick={search} />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.floor(((data.main.feels_like.toFixed())-32)*5/9)}°C</h1> : null}
          </div>
        {/*   <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>*/}
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{Math.floor(((data.main.feels_like.toFixed())-32)*5/9)}°C</p> : null}
              <p>تقريبا</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>رطوبة</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>سرعة الرياح</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default WeatherApi;
