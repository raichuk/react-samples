import React from 'react';

import CivilizationDetailCardEdit from '../../components/CivilizationDetailCardEdit/CivilizationDetailCardEdit';

const initialState = {
  name: '',
  expansion: '',
  teamBonus: ''
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_NAME':
      return ({...state, name: payload});
    case 'UPDATE_EXPANSION':
      return ({...state, expansion: payload});
    case 'UPDATE_TEAM_BONUS':
      return ({...state, teamBonus: payload});
    default:
      throw new Error(`${type} not found`);
  }
}

const New = () =>  {
  const [ civilization, dispatch ] = React.useReducer(reducer, initialState);

  return (
    <div className='New'>
      <CivilizationDetailCardEdit civilization={civilization} handleUpdate={dispatch} />
    </div>
  );
};

export default New;
