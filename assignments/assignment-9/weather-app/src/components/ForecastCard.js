import "./ForecastCard.css";

const ForecastCard = (props) => {
  return (
    <div className="forecastCard">
    <div className="forecastCard-top">
      <div className="forecast-card-content">
        <p className="forecastLocation mt-2">{props.day}</p>
        <h1 className="forecastDegree">
          {props.temp}<sup>o</sup>
        </h1>
        <p className="forecast-weather-status">{props.description}</p>
      </div>
      <div className="forecastCard-image">
        <img src={`icons/${props.icon}.png`} alt="cloud" border="0" />
      </div>
    </div>
    <div className="forecastCard-bottom">
    <p className="forecastTemp">{props.minTemp}/{props.maxTemp}<sup>o</sup></p>
      <p className="forecastWind">{props.windSpeed} mph</p>
      <p className="forecastHumidity">{props.humidity} %</p>
    </div>
  </div>
  );
};

export default ForecastCard;
