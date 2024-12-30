import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Bengaluru",
        feelsLike: 20.25,
        temp:19.93,
        tempMax:20.8,
        tempMin:17.9,
        humidity:87,
        weather:"few clouds"
    });
   let updateinfo=(newInfo)=>{
    setweatherInfo(newInfo);
   }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App!!</h2>
            <SearchBox updateInfo={updateinfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )

}