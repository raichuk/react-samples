import React from 'react';

import { SettingsContext } from '../../Provider';

const CivilizationDetailCard = ({ civilization }) => {
  const { config } = React.useContext(SettingsContext);
  
  if (!civilization) {
    return null;
  }

  return (
    <div className='CivilizationDetailCard'>
      <h1>{ civilization.name }</h1>
      <h2>{ config.showExpansion && civilization.expansion }</h2>
      <h3 style={{textAlign: 'center'}}>{ config.showTeamBonus && civilization.team_bonus }</h3>
      <ul>
      {
        config.showCivilizationBonus &&
        civilization.civilization_bonus.map( (b, i) =>
          <li key={i}>{ b }</li>
        )
      }
      </ul>
    </div>
  );
};

export default CivilizationDetailCard;
