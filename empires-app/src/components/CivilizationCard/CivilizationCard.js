import React from 'react';

const CivilizationCard = ({ data, handleClick }) => (
  <div className='CivilizationCard' onClick={() => handleClick(data.id)}>
    <h3>{ data.name }</h3>
  </div>
);

export default CivilizationCard;
