import ForecastCard from "./ForecastCard";

const ForecastSection = () => {
  return(
    <div className="forecast-wrapper">
      <ForecastCard day={'MON'} temp={20} description={'Thunder'} icon={'02d'} minTemp={12} maxTemp={20} windSpeed={13} humidity={45} />
      <ForecastCard day={'TUE'} temp={34} description={'Rainy'} icon={'09d'} minTemp={18} maxTemp={26} windSpeed={18} humidity={50} />
      <ForecastCard day={'WED'} temp={17} description={'Cloudy'} icon={'10d'} minTemp={22} maxTemp={31} windSpeed={7} humidity={30} />
      <ForecastCard day={'THU'} temp={22} description={'Sunny'} icon={'50d'} minTemp={13} maxTemp={24} windSpeed={30} humidity={28} />
      <ForecastCard day={'FRI'} temp={38} description={'Snow'} icon={'13d'} minTemp={17} maxTemp={28} windSpeed={23} humidity={79} />
      <ForecastCard day={'SAT'} temp={42} description={'Hot'} icon={'11d'} minTemp={23} maxTemp={33} windSpeed={11} humidity={64} />
      <ForecastCard day={'SUN'} temp={23} description={'Thunder'} icon={'01d'} minTemp={10} maxTemp={19} windSpeed={21} humidity={32} />
      
    </div>
  );
}

export default ForecastSection;