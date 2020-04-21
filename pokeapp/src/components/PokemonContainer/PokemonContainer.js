import React from 'react';

import PokemonDetail from '../PokemonDetail/PokemonDetail.js';

import PokemonSDK from '../../lib/sdk';

const capitalize = content => `${content.charAt(0).toUpperCase()}${content.slice(1)}`;

const PokemonRow = props => (
  <div style={{ display: "flex", justifyContent: "space-between", marginTop: '15px' }}>
    <label>{`${capitalize(props.name)}`}</label>
    <button onClick={props.handleClick} style={{backgroundColor: 'transparent', width: '100px'}}>Detalle</button>
  </div>
);

const PokemonContainer = () => {
  const [pokemonList, setPokemonList] = React.useState([]);
  const [pokemonSelected, setPokemonSelected] = React.useState(null);

  React.useEffect(() => {
    async function getAll() {
      try {
        const { results } = await PokemonSDK.findAll();
        setPokemonList(results);
      } catch (error) {
        console.log(error)
      }
    }

    getAll();
  }, []);

  return (
    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
      <div style={{border: '1px solid black', width: '50%', marginRight: '5px', padding: '20px'}}>
      {
        pokemonList.map((p, i) => (
          <PokemonRow
            key={i}
            name={p.name}
            handleClick={() => setPokemonSelected({...p})}
          />
        ))
      }
      </div>
      <div style={{border: '1px solid black', width: '50%', maxHeight: '500px'}}>
      {
        pokemonSelected ?
        <PokemonDetail name={pokemonSelected.name} handleClick={() => setPokemonSelected(null)} /> :
        null
      }
      </div>
    </div>
  );
};

export default PokemonContainer;
