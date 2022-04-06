import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <div className="title">
          <Title headline="Missões" />
        </div>
        <div className="missions-session">
          {
            missions.map((item) => (
              <MissionCard
                key={ item.name }
                name={ item.name }
                year={ item.year }
                country={ item.country }
                destination={ item.destination }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
