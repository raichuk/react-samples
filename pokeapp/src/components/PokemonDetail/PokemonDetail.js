import React from 'react';

import PokemonSDK from '../../lib/sdk';

const PokemonDetail = (props) => {
  const { name, handleClick } = props;
  const [pokemonImg, setPokemonImg] = React.useState(null);

  React.useEffect(() => {
    async function getOne () {
      setPokemonImg(null)
      const { sprites } = await PokemonSDK.get(name);

      setPokemonImg(sprites.front_default);
    }

    getOne();
  }, [name]);

  React.useEffect(() => window.scrollTo(0, 0));

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <h1>{name.toUpperCase()}</h1>
        </div>
        <div style={{width: '250px', marginLeft: 'auto', marginRight: 'auto' }}>
        {
          pokemonImg ?
          <img style={{ width: '100%', height: '100%' }} src={pokemonImg} /> :
          <p>Loading...</p>
        }
        </div>
    </div>
  );
};

export default PokemonDetail;
