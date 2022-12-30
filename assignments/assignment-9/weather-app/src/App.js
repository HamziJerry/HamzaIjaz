import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { useState } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastSection from "./components/ForecastSection";

function App() {
  const [formData, setFormData] = useState({});
  const [state, setState] = useState({city: null, current: null, forecast: null});
  console.log("State", formData);

  const getCoordinates = async () => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${formData.city}&limit=5&appid=72e0a205af244763ccd279e2bc2ccfca`);
    const data = await response.json();
    const {lat, lon} = data[0];
    const currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72e0a205af244763ccd279e2bc2ccfca`);
    const currentData = await currentResponse.json();
    console.log(currentData);
    setState({...state, current: currentData});
    console.log(state);
  }
 
  return (
    <div className="App container">
      <h1 className="pb-2">Weather App</h1>
      <Card
        width="80%"
        inner={
          <Form
            updateFormData={(data) => {
              setFormData(data);
              getCoordinates();
            }}
          />
        }
      />
     <Card
        width="80%"
        inner={
          <CurrentWeatherCard currentData={state.current} />
        }
      /> 
      <Card
        width="80%"
        inner={
          <ForecastSection />
        }
      />
    </div>
  );
}

export default App;
