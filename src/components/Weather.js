import MapComponent from "./MapComponent"
import Card from './Card'
import ForecastCards from "./ForecastCards"
import ForecastExtraCards from "./ForecastExtraCards"
import { images, findIcon } from './icons'

export default function Weather(props) {
    if (typeof props.weather === 'object' && typeof props.forecast === 'object') { //ensure props have loaded
        let iconAddress = findIcon(props.weather.weather[0].icon)
        return (
            <div className="results-container">
                <div id="title-description-wrap">
                    <div>
                        <h2>{props.data.label}</h2>
                        <p id="title-description">{props.weather.weather[0].description}</p>
                    </div>
                    <img id="main-icon" src={iconAddress} />
                </div>
                <div className="results">
                    {/* <div>
                    <p>Temperature : {`${Object.entries(props.weather.main).toString()}`}</p>
                </div> */}
                    <MapComponent coords={props.data.value} />
                    <Card
                        id={"card-temp"}
                        number={props.weather.main.temp}
                        title={'Temperature'}
                        measurement={'°C'} />
                    <Card
                        number={props.weather.main.temp_min}
                        title={'Min Temp'}
                        measurement={'°C'} />
                    <Card
                        number={props.weather.main.temp_max}
                        title={'Max Temp'}
                        measurement={'°C'} />

                    <Card
                        id={"card-feels-like"}
                        number={props.weather.main.feels_like}
                        title={'Feels Like'}
                        measurement={'°C'} />
                    <Card
                        number={props.weather.main.humidity}
                        title={'Humidity'} />
                    <Card
                        number={props.weather.main.pressure}
                        title={'Pressure'} />

                    <div className="forecast">
                        <div className="forecast-cards">
                            <ForecastCards forecast={props.forecast} measurement={'°C'} />
                            <ForecastExtraCards forecast={props.forecast} weather={props.weather} measurement={'°C'} />
                        </div>
                    </div>


                </div>
            </div >
        )
    }
}