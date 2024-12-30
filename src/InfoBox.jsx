import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"
export default function InfoBox({info}){
    const initialUrl="https://plus.unsplash.com/premium_photo-1667143328456-7e72f368c1ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmV3JTIwY2xvdWRzfGVufDB8fDB8fHww";
    const Hot_Url="https://images.unsplash.com/photo-1567787782997-319ae6cf2edc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const cold_url="https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_url="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    return(
    <div className='infoBox'>
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
    <div className='card-container'>
        <Card sx={{ maxWidth: 345 }}>
       <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain_url:info.temp>15?Hot_Url:cold_url}
        title="Weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
          
        </Typography>
        <Typography variant="body2" color='text.secondary'  component={"span"}>
          <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <div>Min Temp={info.tempMin}&deg;C</div>
          <div>Max Temp={info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{info.weather}</i> and feels Like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}