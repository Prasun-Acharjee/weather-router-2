import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
const Child = () => {
  const location = useLocation();
  const paramss = useParams();

  const [weatherInfo, setWeatherInfo] = useState({ weather: "", temp: "" });
  const [error, setError] = useState(false);
  //   console.log(location, paramss);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${paramss.locationId}&appid=989aeb61637efc432e57044c6c5bd577`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setError(false);
        setWeatherInfo({
          weather: result.weather[0].main,
          temp: result.main.temp,
        });
      })
      .catch((err) => {
        setError(true);
      });
  }, [paramss]);

  if (error) {
    return <div>No such location present!</div>;
  }

  return (
    <div>
      In {paramss.locationId} the temperature is {weatherInfo.temp} and weather
      is {weatherInfo.weather}
    </div>
  );
};

export default Child;
