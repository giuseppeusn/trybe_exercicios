import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <div className="title">
          <Title headline="Planetas" />
        </div>
        <div className="planets">
          {planets.map((item) => (<PlanetCard
            key={ item.name }
            planetName={ item.name }
            planetImage={ item.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
