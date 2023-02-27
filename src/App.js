import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'
import { OPEN_WEATHER_API_URL, OPEN_WEATHER_API_KEY } from './api'
import { useState } from 'react'
export default function App() {

    const [weather, setWeather] = useState('');
    const [forecast, setForecast] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [data, setData] = useState(null);
    const handleOnSearchChange = (searchData) => {
        setHasSearched(true);
        setData(searchData);

        const [latitude, longitude] = searchData.value;

        fetch(`${OPEN_WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((response) => {
                setWeather(response);
            })
            .catch(err => console.error(err))

        fetch(`${OPEN_WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((response) => {
                setForecast(response);
            })
            .catch(err => console.error(err))

    }

    return (
        <div id="App">
            <div className='main-container'>
                <header>
                    <div id="header-logo-wrap">
                        <img src={require('./images/fog.png')} alt="logo" id="header-logo" />
                        <h1>WeatherApp</h1>
                    </div>
                    <Search onSearchChange={handleOnSearchChange} />
                    <nav id="header-nav">
                        <a href='http://localhost:1234/'>View Code</a>
                        |
                        <a href='http://localhost:1234/'> Harry Ward-Gray
                        </a>
                    </nav>
                </header>
                <Weather weather={weather} forecast={forecast} data={data} />
            </div>
        </div>
    )
}