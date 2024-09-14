import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import axios from 'axios';
import React, { useState } from 'react';
function Meteo() {
    const [city,setCity] = useState('Blida');
    const apiKey = '74dedcf48306d782778a1752aaeff1b9';
    const [weatherData, setWeatherData] = useState(null);

    const getWeather  = async()=>{
        try{
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`
              );
              setWeatherData(response.data);
        // eslint-disable-next-line no-unused-vars
        }catch (error) {
            // Affichage de l'erreur si la requête échoue
            alert('Erreur lors de la récupération des données météo. Veuillez réessayer.');
      }
    };

return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px',background: 'linear-gradient(to right, #00c6ff, #0072ff)', // Dégradé de couleur
        padding: '20px',
        borderRadius: '8px'}}>
<TextField 
 label="أدخل المدينة" 
 variant="outlined" 
 value={city}
 onChange={(e)=>setCity(e.target.value)}
 style={{ marginBottom: '20px', width: '300px' }}
/>
<Button variant="contained" onClick={getWeather}   style={{marginBottom:'20px'}}>
الحصول على الطقس
</Button>
{weatherData && (
  <Card style={{ width: '300px', textAlign: 'center' }}>
    <CardContent>
      <Typography variant="h5">{weatherData.name}</Typography>
      <Typography variant="body2">
        {weatherData.weather[0].description}
      </Typography>
      <Typography variant="h6">
        درجة الحرارة: {weatherData.main.temp}°C
      </Typography>
      <Typography variant="body2">
        الرطوبة: {weatherData.main.humidity}%
      </Typography>
    </CardContent>
  </Card>
)}

    

    </div>
)
}

export default Meteo;
