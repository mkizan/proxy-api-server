// const fetch = require('node-fetch');
const axios = require('axios').default;
require('dotenv').config();

const endpointOpenWeather = 'https://api.openweathermap.org/data/2.5/weather';
const endpointWeatherBit = 'https://api.weatherbit.io/v2.0/current';
const apiKeyOpenWeather = process.env.API_KEY_OPENWEATHER;
const apiKeyWeatherBit = process.env.API_KEY_WEATHERBIT;

const fetchOpenWeather = (
  latitude,
  longitude,
  language = 'en',
  units = 'metric',
) => {
  const requestUrl = `${endpointOpenWeather}?lat=${latitude}&lon=${longitude}&lang=${language}&exclude=hourly,daily&APPID=${apiKeyOpenWeather}&units=${units}`;
  const options = {
    method: 'GET',
    url: requestUrl,
  };
  return axios.request(options).then(response => response.data);
  // return fetch(requestUrl).then(response => response.json());
};

const fetchWeatherBit = (
  latitude,
  longitude,
  language = 'en',
  units = 'metric',
) => {
  const requestUrl = `${endpointWeatherBit}?lat=${latitude}&lon=${longitude}&lang=${language}&exclude=hourly,daily&key=${apiKeyWeatherBit}&units=${units}`;
  const options = {
    method: 'GET',
    url: requestUrl,
  };
  return axios.request(options).then(response => response.data);
  // return fetch(requestUrl).then(response => response.json());
};

module.exports = { fetchOpenWeather, fetchWeatherBit };
