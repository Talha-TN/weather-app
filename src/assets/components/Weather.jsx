import React, { useState } from 'react';
import ShowWeather from './ShowWeather';
const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const fetchWeather = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8edd81a6b2aceeea0bdcf0b62b390040&units=metric`
            );
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            setWeatherData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setWeatherData(null);
        }
    };
    const handleButton = () => {
        fetchWeather();
    };

    return (
       <ShowWeather setCity={setCity} error={error} handleButton={handleButton} weatherData={weatherData}/>
    );
};

export default Weather;

