import styled from "styled-components";
import React, { useEffect } from "react";
import anime from 'animejs';

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  padding: 10px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    flex: 1;
    margin-right: 10px;
  }

  & button {
    background-color: #007BFF;
    font-size: 14px;
    padding: 10px 20px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ChooseCityLabel = styled.span`
  color: #333;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
  display: block;
`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;

  useEffect(() => {
    anime({
      targets: '.search-box',
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1000,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <>
      <WelcomeWeatherLogo src={process.env.PUBLIC_URL + "/icons/perfect-day.svg"} />
      <ChooseCityLabel>Find Weather of Your City</ChooseCityLabel>
      <SearchBox className="search-box" onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
