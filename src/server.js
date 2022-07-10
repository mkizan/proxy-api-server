const express = require('express');
const cors = require('cors');
const api = require('./api-service/fetch-weather');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors('*'));

app.get('/openweather', (req, res) => {
  const { lat, lon, lang, units } = req.query;

  console.log(lat, lon, lang, units);
  if (!lat || !lon) {
    res.status(400).json({
      message:
        'Request url must include latitude, longitude and language parameters.',
    });

    return;
  }

  api
    .fetchOpenWeather(lat, lon, lang, units)
    .then(weather => res.status(200).json(weather))
    .catch(error => res.status(400).json({ message: error.message }));
});

app.get('/weatherbit', (req, res) => {
  const { lat, lon, lang, units } = req.query;

  if (!lat || !lon) {
    res.status(400).json({
      message:
        'Request url must include latitude, longitude and language parameters.',
    });

    return;
  }

  api
    .fetchWeatherBit(lat, lon, lang, units)
    .then(weather => res.status(200).json(weather))
    .catch(error => res.status(400).json({ message: error.message }));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
