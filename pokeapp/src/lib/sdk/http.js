async function httpGet(url) {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const params = {
      headers,
      method: "GET"
    };

    const response = await fetch(url, params);
    const json = await response.json();

    if (json.error) {
      throw json.error;
    }

    return json;
  } catch (err) {
    throw err;
  }
}

module.exports = httpGet;
