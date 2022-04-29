import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherType, Coord } from "../types/WeatherType";

interface Weather {
  temp: number;
}

export const useWeather = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherType>({} as WeatherType);
  const [coordinates, setCoordinates] = useState<Coord>({} as Coord);
  const fetchWeather = async (city: string) => {
    try {
      setIsPending(true);
      if (city) {
        const { data } = await axios.get<WeatherType>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );
        console.log(data);
        setWeather(data);
        console.log(data.coord.lat);
        setCoordinates({ lat: data.coord.lat, lon: data.coord.lon });
      }
    } catch (err) {
      console.log(err);
      setIsPending(false);
    } finally {
      setIsPending(false);
    }
  };

  return { weather, isPending, fetchWeather, coordinates };
};
