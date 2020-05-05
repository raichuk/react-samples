import React from 'react';

const CivilizationDetailCardEdit = ({ civilization, handleUpdate }) => (
  <div className='CivilizationDetailCard'>
    <input
      type='text'
      placeholder='Name'
      value={civilization.name}
      onChange={e => handleUpdate({ type: 'UPDATE_NAME', payload: e.target.value })}
      className='CivilizationInput'
    />
    <input
      type='text'
      placeholder='Expansion'
      value={civilization.expansion}
      onChange={e => handleUpdate({ type: 'UPDATE_EXPANSION', payload: e.target.value })}
      className='CivilizationInput'
    />
    <input
      type='text'
      placeholder='Team Bonus'
      value={civilization.teamBonus}
      onChange={e => handleUpdate({ type: 'UPDATE_TEAM_BONUS', payload: e.target.value })}
      className='CivilizationInput'
    />
  </div>
);

export default CivilizationDetailCardEdit;
