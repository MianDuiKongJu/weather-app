import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5';

const OpenWeatherMap = axios.create({
  baseURL,
})

const enrichRequestWithAppId = (config) => {
  config.params.appid = '5aa8cafa2b3718b410ac8efb78dbe612';

  return config;
};

const enrichRequestWithCelsiusUnits = (config) => {
  config.params.units = 'metric';

  return config;
};

OpenWeatherMap.interceptors.request.use(enrichRequestWithAppId);
OpenWeatherMap.interceptors.request.use(enrichRequestWithCelsiusUnits);

export default OpenWeatherMap;

