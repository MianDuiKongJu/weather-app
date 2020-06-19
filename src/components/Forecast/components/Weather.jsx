import React from 'react';
import styles from './Weather.module.css';
import Temperature from '../../Temperature';

const Weather = ({
  day,
  temperature,
  weather,
}) => (
  <div className={styles.weather}>
    <div className={styles.day}>{day}</div>
    <div className={styles.temperature}>
      <Temperature>{temperature}</Temperature>
    </div>
    <img
      className={styles.icon}
      src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
      alt={weather.description}
    />
    <siv className={styles.description}>{weather.description}</siv>
  </div>
);

export default Weather;