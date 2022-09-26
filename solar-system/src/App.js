import React from 'react';
import Header from './components/header';
import SolarSystem from './components/solarSystem';
import Missions from './components/missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <SolarSystem />
          <Missions />
        </main>
      </>
    );
  }
}

export default App;
