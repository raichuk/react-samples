import httpGet from './http';

function Pokemon() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const findAll = () => httpGet(baseUrl);
  const get = name => httpGet(`${baseUrl}${name}`);

  return ({
    findAll,
    get
  });
}

export default Pokemon();
