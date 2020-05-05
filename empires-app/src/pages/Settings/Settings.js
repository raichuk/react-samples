import React from 'react';

import { SettingsContext } from '../../Provider';

const Settings = () => {
  const { config, updateSettings } = React.useContext(SettingsContext);

  return (
    <div>
      <label>Show expansion</label>
      <input
        type='checkbox'
        checked={config.showExpansion}
        onChange={v => updateSettings({ type: 'UPDATE_SHOW_EXPANSION', value: v.target.checked })}
    />
    </div>
  )
};

export default Settings;
