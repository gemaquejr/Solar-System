import React from 'react';
import Title from './title';
import missions from '../data/missions';
import MissionCard from './missionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="mission" data-testid="missions">
        <Title headline="Missões" />
        {missions.map((value) => (
          <MissionCard
            key={ value.name }
            name={ value.name }
            year={ value.year }
            country={ value.country }
            destination={ value.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;