import Searchbox from "./Searchbox"
import Inbox from "./Inbox"
import { useState } from "react"
import '../src/WeatherApp.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })
    let updateinfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <>
        <div className="container">
            <div className="nav">
                <div className="title">
                
                    <p className="tee"><ThunderstormIcon/>&nbsp;THE WEATHER</p>
                    <p className="fore">FORECASTING</p>
                </div>
                <div className="icon"><GitHubIcon/></div>
            </div>
            <div className="content">
            <Searchbox updateinfo={updateinfo}></Searchbox>
            <Inbox info={weatherInfo}></Inbox>
            </div>
        </div>
        </>
    )
}