import React from 'react';

import CivilizationCard from '../CivilizationCard/CivilizationCard';

const CivilizationsList = ({ civilizations, onCivilizationClick }) => {
  
  if (!civilizations.length) {
    return null;
  }

  return (
    <div className='CivilizationsListContainer'>
      <ul className='CivilizationsList'>
        {
          civilizations.map(c => 
            <li key={c.id}>
              <CivilizationCard data={c} handleClick={onCivilizationClick} />
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default CivilizationsList;
