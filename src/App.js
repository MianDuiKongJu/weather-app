import React from 'react';
import styles from './App.module.css';
import Current from './components/Current';
import VerticalDivider from './components/VerticalDivider/VerticalDivider';
import OtherCities from './components/OtherCities';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.weather}>
        <div className={styles.top}>
          <Current />
        </div>
        <div className={styles.bottom}>
          <OtherCities />
          <VerticalDivider color="rgba(0, 0, 0, 0.1)" width="3px"/>
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
