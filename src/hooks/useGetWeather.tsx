import {UilSun,UilCloud,UilCloudShowersHeavy,UilWater,UilSnowflake,UilCloudDrizzle,UilThunderstorm} from '@iconscout/react-unicons'
import axios from 'axios'
import { useEffect, useState } from 'react'
const useGetWeather = () => {
    const [weather,setWeather] = useState({})
    const getIcon = (condition) => {
        switch(condition){
            case 'Clear' : return <UilSun/>
            case 'Clouds' : return<UilCloud/>
            case 'Rain' : return<UilCloudShowersHeavy/>
            case 'Snow' :return <UilSnowflake/>
            case 'Drizzle' :return <UilCloudDrizzle/>
            case 'Mist': return <UilWater/>
            case 'Thunderstorm' :return <UilThunderstorm/>
        }
    }
    const getCondition = (condition) => {
        switch(condition){
            case 'Clear' : return '맑음'
            case 'Clouds' : return '흐림'
            case 'Rain' : return '비'
            case 'Snow' :return '눈'
            case 'Drizzle' :return '이슬비'
            case 'Mist': return '안개'
            case 'Thunderstorm' :return '천둥번개'
        }
    }
    useEffect(() => {
        const fetchWeather = async (lat, lon) => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                    params: {
                        lat: lat,
                        lon: lon,
                        appid: process.env.NEXT_PUBLIC_WEATHER_KEY,
                        lang: 'kr',
                        units: 'metric'
                    }
                });
                const { temp, humidity } = response.data.main;
                const condition = response.data.weather[0].main;
                setWeather({
                    temp,
                    humidity,
                    condition: getCondition(condition),
                    icon: getIcon(condition)
                });
            } catch (error) {
                console.error("Weather fetching error:", error);
            }
        };

        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
        }, (error) => {
            console.error("Geolocation error:", error);
        });
    }, []);
    return(
        weather
    )
}
export default useGetWeather