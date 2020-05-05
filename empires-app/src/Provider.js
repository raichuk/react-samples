import React from 'react';

import sdk from './lib/sdk';

function reducer(currentSettings, action) {
  const { type, value } = action;

  switch (type) {
    case 'INITIAL':
      return ({...value});
    case 'UPDATE_SHOW_EXPANSION':
      return ({...currentSettings, showExpansion: value});
    default:
      throw new Error(`${type} not found`);
  }
}


export const SettingsContext = React.createContext({});

const Provider = ({ children }) => {
  const [ ready, setReady ] = React.useState(false);
  const [ config, updateSettings ] = React.useReducer(reducer, {});

  React.useEffect(() => {
    const fetchSettings = async () => {
      const settingsFound = await sdk.Settings.findAll();
      updateSettings({ type: 'INITIAL', value: settingsFound });
      setReady(true);
    };

    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ config, updateSettings }}>
      { ready && children }
    </SettingsContext.Provider>
  );
};

export default Provider;
