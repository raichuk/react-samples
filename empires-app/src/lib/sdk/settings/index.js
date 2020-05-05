import { baseUrl } from '../config';
import httpGet from '../http';

function Settings() {
  const findAll = () => httpGet(`${baseUrl}/settings`);

  return ({
    findAll
  });

};

export default Settings();
