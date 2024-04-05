import * as React from 'react';
import cloudyrainy from '../src/img/cloudyrainy.png';
import clearsky from '../src/img/clear sky.png';
import cold from '../src/img/cold.png';
import './Searchbox.css';
export default function Inbox({info}){
  let imageUrl;
  if (info.humidity > 80) {
    imageUrl = cloudyrainy;
  }
  else if (info.temp > 15 & info.temp<26) {
    imageUrl = clearsky;
  } 
  else if (info.temp > 26 ){
    imageUrl = cloudyrainy;
  }
  else {
    imageUrl = cold;
  }
  return(
        <>
        <div className="Infobox">
            <div className='Cardcontainer'>
              <div className='image-sec'>
                <img src={imageUrl} width={100}/>
                <p>{info.city}</p>
                <p className='h1'>{info.temp}&deg;C</p>
                <p>{info.weather}</p>
              </div>
              <div className='card-section'>
                <h3>Forecast Details</h3><hr></hr>
              <table>
                <tbody>
                <tr>
                <td>Humidity : {info.humidity}</td>
                <td>Feels : {info.temp}&deg;C</td>
                <td>Min Temp : {info.tempMin}&deg;C</td>
                </tr>
                <tr>
                <td>Max Temp : 60</td>
                <td>Weather : {info.weather}</td>
                <td>Max Temp : {info.tempMax}&deg;C</td>
                </tr>
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
    )
}