/* eslint-disable */

const API_HOST = "http://" + window.location.hostname+":9500/api";

async function initialize() {
  console.info("Fetching monitor info");
  const monitors = await getMonitors();
  console.log(monitors);
}

async function getMonitors() {
  console.warn(API_HOST)
  const req = await fetch(API_HOST + '?getMonitors=1')
  if (req && req.status === 200) {
    const response = await req.json();
    console.warn(response)
    return response.data;
  }
  return [];
}
