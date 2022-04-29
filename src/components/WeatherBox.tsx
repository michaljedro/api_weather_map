import React from "react";
import { WeatherType } from "../types/WeatherType";
import { Stack } from "../components/UI/Stack";

interface WeatherBoxProps {
  weather?: WeatherType;
}

interface Response<T> {
  code: number;
  data: T;
}

export const WeatherBox: React.FC<WeatherBoxProps> = ({ weather }) => {
  return (
    <Stack color="#263AB6">
      <div>Miasto: {weather?.name}</div>
      <div>Temperatura: {weather?.main?.temp}</div>
      <div>Cisnienie: {weather?.main?.pressure}</div>
    </Stack>
  );
};
