const urlParams = new URLSearchParams(window.location.search);
const penggunaId = urlParams.get("penggunaId");

export const urlFetch =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/pengguna?id=" +
  penggunaId;