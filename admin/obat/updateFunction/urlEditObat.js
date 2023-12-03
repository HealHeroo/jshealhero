const urlParams = new URLSearchParams(window.location.search);
const obatId = urlParams.get("obatId");

export const urlFetch =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero?id=" +
  obatId;
