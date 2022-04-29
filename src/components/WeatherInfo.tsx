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

// const add = <T,>(a:T,b:T) => a+b

// add<number>(2,2)

export const WeatherBox: React.FC<WeatherBoxProps> = ({ weather }) => {
  return (
    <Stack color="#263AB6">
      <div>{weather?.name}</div>
      <div>{weather?.main?.temp}</div>
      <div>{weather?.main?.pressure}</div>
    </Stack>
  );
};
