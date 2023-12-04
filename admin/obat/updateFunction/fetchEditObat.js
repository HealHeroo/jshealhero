// import { isiData } from "editObat.js";
// import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
// import { urlFetch } from "urlEditObat.js";

// function get(target_url, responseFunction) {
//   const myHeaders = new Headers();
//   myHeaders.append("Authorization", getCookie("Authorization"));

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch(target_url, requestOptions)
//     .then((response) => response.text())
//     .then((result) => responseFunction(JSON.parse(result)))
//     .catch((error) => console.log("error", error));
// }
// window.editObat = (idObat) => {
//     // Logic to fetch specific obat data for editing
//     const editUrl = `https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero?id=${idObat}`;
//     get(editUrl, isiData);
//   };
// get(urlFetch, isiData);

import { isiData } from "../updateFunction/editObat.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlFetch } from "../updateFunction/urlEditObat.js";

function get(target_url, responseFunction) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}
get(urlFetch, isiData);