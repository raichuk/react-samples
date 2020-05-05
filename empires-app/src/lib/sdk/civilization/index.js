import { baseUrl } from '../config';
import httpGet from '../http';

function Civilization() {
  const findAll = () => httpGet(`${baseUrl}/civilizations`);

  return ({
    findAll
  });

};

export default Civilization();
