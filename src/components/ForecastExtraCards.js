import { images, findIcon } from './icons'

export default function ForecastExtraCards(props) {

    //Creates array of objects (days[]) containing days and relevant data
    let today = new Date(props.weather.dt * 1000).toString().substring(0, 3); // Gets abbreviation e.g. Mon, Tue
    let days = [];
    let currentDay;


    props.forecast.list.forEach((item) => {
        let day = new Date(item.dt * 1000).toString().substring(0, 3);
        if (day === today) return; //info for current day not needed in this section

        day === currentDay ?
            days[days.length - 1].temps.push(item.main.temp)
            && days[days.length - 1].descriptions.push([item.weather[0].main, item.weather[0].icon])
            :
            days.push({
                name: day,
                temps: [item.main.temp],
                descriptions: [[item.weather[0].main, item.weather[0].icon]],
            }),
            currentDay = day;

    })
    console.log(days);
    //find avg temp of day
    days.forEach((day) => {

        let avgTemp = 0;
        day.temps.forEach((temp) => {
            avgTemp += temp
        })
        day.avgTemp = avgTemp / day.temps.length;

    })

    //find most frequent description
    days.forEach((day) => {

        let mostCommonDescription;
        let highestCount = 0;

        day.descriptions.forEach((desc) => {
            let count = 0;
            day.descriptions.forEach((comparison) => {
                if (desc === comparison) {
                    count++;
                    if (count > highestCount) {
                        highestCount = count;
                        mostCommonDescription = desc;
                    };
                }
            })
        })

        day.generalDescription = mostCommonDescription;
    })

    let forecastExtraCards = [];
    days.forEach((day, i) => {
        let dayIcon = day.generalDescription[1].replace("n", "d"); //ensures day icon variation for general day descriptions
        let iconAddress = findIcon(dayIcon)
        forecastExtraCards.push(
            <div key={`extra-card${i}`} className="forecast-card">
                <p className="forecast-card-day">{day.name}</p>
                <p className="forecast-card-temp">{Math.round(day.avgTemp)}{props.measurement} </p>
                <img className="forecast-card-icon" src={iconAddress} />
                <p className="forecast-card-desc">{day.generalDescription[0]}</p>
            </div>,
            <div key={`extra-seperator${i}`} className="forecast-card-seperator"></div>//seperating style element

        )

    })

    return (forecastExtraCards)
}