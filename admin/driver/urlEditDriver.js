const urlParams = new URLSearchParams(window.location.search);
const driverId = urlParams.get("driverId");

export const urlFetch =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/driverr?id=" +
  driverId;