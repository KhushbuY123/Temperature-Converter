import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import './Searchbox.css';
import { useState } from 'react';
export default function Searchbox({updateinfo}){
    let[city,setcity]=useState();
    let[error,seterror]=useState(false);
    const URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="b941d3b3eb0a33408b5dba7ad8954e18";
    let getWeatherInfo=async()=>{
        try{
        let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json()
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        }
        return result;
    }
    catch(err){
        throw err;
    }
    };
    let handlecity=(event)=>{
        setcity(event.target.value);
    }
    let handlesubmit=async (event)=>{
        try{
            console.log(city);
            event.preventDefault();
            seterror(false)

        setcity("");
        let newinfo= await getWeatherInfo();
        updateinfo(newinfo);
        }
        catch(err){
            seterror(true);
        }
    }
    return(
        <>
            <div className='Searchbox'>
                <form onSubmit={handlesubmit}>
                    <div className='textf'>
                        <TextField id="standard-basic" label="City Name" variant="standard" value={city} onChange={handlecity} fullWidth autoComplete='off'   className="white-text-input"/>
                    </div>
                    <div><br></br>
                        <Button type="submit" variant="contained" endIcon={<SendIcon />} >Go</Button>
                    </div>
                </form>
                <div className='error'>
                    {error &&<p>No Such Place In Our API</p>}
                </div>
            </div>
        </>
    )
}