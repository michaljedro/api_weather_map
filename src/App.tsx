import React, { useState, useEffect } from "react";
import "./App.css";
import { useWeather } from "./hooks/useWeather";
import { WeatherBox } from "./components/WeatherBox";
import { SearchBox } from "./components/SearchBox";
import { Stack } from "./components/UI/Stack";
import { WeatherType } from "./types/WeatherType";
import { isEmpty } from "./utils/isEmpty";
import { Box } from "./components/UI/Box";
import { Map } from "./components/Map";
function App() {
  const [cities, setCities] = useState<WeatherType[]>([]);
  const { weather, fetchWeather, coordinates } = useWeather();

  const handleCitySearch = (city: string) => {
    fetchWeather(city);
  };

  useEffect(() => {
    if (!isEmpty(weather)) {
      setCities((prev) => [...prev, weather]);
    }
  }, [weather]);
  console.log(cities);

  return (
    <Stack color="#263AB6">
      <Box width="30vw">
        <SearchBox onSubmit={handleCitySearch} />
      </Box>
      <Box backgroundColor="blue">
        {cities.map((city, i) => (
          <WeatherBox key={i} weather={city} />
        ))}
      </Box>
      <Box>
        {coordinates.lat && <Map lng={coordinates.lon} lat={coordinates.lat} />}
      </Box>
    </Stack>
  );
}

export default App;
