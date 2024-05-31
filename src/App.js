import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/react-weather-app/icons/sunny.svg",
  "01n": "/react-weather-app/icons/night.svg",
  "02d": "/react-weather-app/icons/day.svg",
  "02n": "/react-weather-app/icons/cloudy-night.svg",
  "03d": "/react-weather-app/icons/cloudy.svg",
  "03n": "/react-weather-app/icons/cloudy.svg",
  "04d": "/react-weather-app/icons/perfect-day.svg",
  "04n": "/react-weather-app/icons/cloudy-night.svg",
  "09d": "/react-weather-app/icons/rain.svg",
  "09n": "/react-weather-app/icons/rain-night.svg",
  "10d": "/react-weather-app/icons/rain.svg",
  "10n": "/react-weather-app/icons/rain-night.svg",
  "11d": "/react-weather-app/icons/storm.svg",
  "11n": "/react-weather-app/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  font-family: 'Roboto', sans-serif;
`;

const AppLabel = styled.span`
  color: #555;
  margin: 20px auto;
  font-size: 24px;
  font-weight: bold;
`;

const CloseButton = styled.span`
  padding: 5px 8px;
  background-color: #333;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=593e9f657f0db0f8c2343d56943f9b56`,
    );
    updateWeather(response.data);
  };
  return (
    <Container className="container">
      <AppLabel className="app-label">Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
