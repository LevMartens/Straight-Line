import { decimalToPercentage } from "../generators/decimal-to-percentage-generator";
import { kelvinToCelsius } from "../generators/kelvin-to-celsius-generator";
import { msToKmh } from "../generators/ms-to-kmh-generator";
import { getWeatherIcon } from "../helpers/if_statements";
import { getRawWeatherData } from "../../resources/rest_api/get-weather";
import store from "../../presentation/state_management/store/store";
import { weatherDataUpdate } from "../../presentation/state_management/actions/actions";

export async function getWeatherData(location) {
  const { latitude, longitude } = location;

  const rawWeatherData = await getRawWeatherData(latitude, longitude);

  if (rawWeatherData.hasError) {
    const weatherData = {
      weatherDataLoaded: false,
      weatherDataError: true,
      icon: null,
      temprature: null,
      percentageRain: null,
      windSpeed: null,
    };

    store.dispatch(weatherDataUpdate(weatherData));
    return;
  }

  const { daily } = rawWeatherData;

  const {
    pop,
    wind_speed,
    temp: { day },
    weather,
  } = daily[0];

  const { id } = weather[0];

  const icon = await getWeatherIcon(id);
  const temprature = await kelvinToCelsius(day);
  const percentageRain = await decimalToPercentage(pop);
  const windSpeed = await msToKmh(wind_speed);

  const weatherData = {
    weatherDataLoaded: true,
    weatherDataError: false,
    icon: icon,
    temprature: temprature,
    percentageRain: percentageRain,
    windSpeed: windSpeed,
  };

  store.dispatch(weatherDataUpdate(weatherData));
}
