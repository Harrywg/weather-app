import { images, findIcon } from './icons'
export default function ForecastCards(props) {
    // console.log(images)


    let forecastCards = [];
    for (let i = 0; i < 6; i++) {
        let iconAddress = findIcon(props.forecast.list[i].weather[0].icon)
        console.log(iconAddress)
        let formattedDate = props.forecast.list[i].dt_txt.substring(props.forecast.list[i].dt_txt.length - 8, props.forecast.list[i].dt_txt.length - 3)
        let temp = Math.round(props.forecast.list[i].main.temp);
        forecastCards.push(
            <div key={`card${i}`} className="forecast-card">
                <p>{formattedDate}</p>
                <p className="forecast-card-temp">{temp}{props.measurement}</p>
                <img className="forecast-card-icon" src={iconAddress} />
                <p className="forecast-card-desc">{props.forecast.list[i].weather[0].main}</p>

            </div>,

            <div key={`seperator${i}`} className="forecast-card-seperator"></div> //seperating style element
        )
    }
    return forecastCards

}