import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import './App.css';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
