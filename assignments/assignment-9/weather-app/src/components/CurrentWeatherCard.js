import "./CurrentWeatherCard.css";

const CurrentWeatherCard = (props) => {
  // const toCelsius = (temp) => {
  //   return temp;
  // };

  return (
    <div>
      <div className="currentCard">
        <div className="currentCard-top">
          <div className="current-card-content">
            <p className="currentLocation mt-2">London</p>
            <h1 className="currentDegree">
              20<sup>o</sup>
            </h1>
            <p className="current-weather-status">description</p>
          </div>
          <div className="date">23,December,2022</div>
          <div className="currentCard-image">
            <img src={`icons/04n.png`} alt="cloud" border="0" />
          </div>
        </div>
        <div className="currentCard-bottom">
          <div className="temp">
            <span>
              <strong>TEMP:</strong>
            </span>{" "}
            <span>
              <em>
                mintemp/maxtemp <sup>o</sup>
              </em>
            </span>
          </div>
          <div className="wind">
            <strong>WIND:</strong> <em>windspeed mph</em>
          </div>
          <div className="sunrise">
            <strong>SUNRISE:</strong> <em>sunrise</em>
          </div>
          <div className="sunset">
            <strong>SUNSET:</strong> <em>sunset</em>
          </div>
          <div className="humidity">
            <strong>HUMIDITY:</strong> <em>humidity %</em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
