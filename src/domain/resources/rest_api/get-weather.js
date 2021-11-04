import { openWeatherAPIKey } from "../../../../api-key";

export async function getRawWeatherData(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${openWeatherAPIKey}`,
    {}
  );

  const data = await response.json();

  if (data.cod === "400") {
    console.log(
      "ERROR: Something went wrong fetching weather data. source: get-weather.js ",
      data.message
    );

    return { hasError: true };
  }

  return data;
}
