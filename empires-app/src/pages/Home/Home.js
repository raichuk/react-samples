import React from 'react';

import CivilizationsList from '../../components/CivilizationsList/CivilizationsList';
import CivilizationDetailCard from '../../components/CivilizationDetailCard/CivilizationDetailCard';

import sdk from '../../lib/sdk';

const Home = () => {
  const [ civilizations, setCivilizations ] = React.useState([]);
  const [ selectedCivilization, setSelectedCivilization ] = React.useState(null);

  React.useEffect(() => {
    const findAll = async () => {
      const civilizationsFound = await sdk.Civilization.findAll();
      setCivilizations(civilizationsFound);
    }

    findAll();
  }, []);

  const handleClick = (civilizationId) => {
    const civilization = civilizations.find(c => c.id === civilizationId);
    setSelectedCivilization(civilization);
  };

  return (
    <div className='Home'>
      <CivilizationsList
        civilizations={civilizations}
        onCivilizationClick={handleClick}
      />
      <CivilizationDetailCard civilization={selectedCivilization} />
    </div>
  );
};

export default Home;
