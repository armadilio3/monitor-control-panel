/* eslint-disable */

const API_HOST = "http://" + window.location.hostname+":9500/api";

async function initialize() {
  console.info("Init");
}

async function sendRequest(param) {
  console.warn(API_HOST)
  const req = await fetch(API_HOST + '?' + param)
  if (req && req.status === 200) {
    const response = await req.json();
    if (response.data.status === "OK") {
      return true;
    }
  }
  return false
}

async function onPCScreenOnly() {
  const action = sendRequest('screenMode=internal');
}

async function onDuplicate() {
  const action = sendRequest('screenMode=clone');
}

async function onExtend() {
  const action = sendRequest('screenMode=extend');
}

async function onSecondScreenOnly() {
  const action = sendRequest('screenMode=external');
}
