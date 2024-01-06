import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "../pengguna/urlPutPengguna.js";

console.log("hadeer");

const putData = (target_url, datajson, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  const raw = JSON.stringify(datajson);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => responseFunction(result))
    .catch((error) => console.log("error", error));
};

const pushData = () => {
  const namalengkap = getValue("namalengkap"); 
  const tanggallahir = getValue("tanggallahir");
  const jeniskelamin = getValue("jeniskelamin");
  const nomorhp = getValue("nomorhp");
  const alamat = getValue("alamat");

  // Create the updated data object
  const data = {
     
      namalengkap: namalengkap,
      tanggallahir: tanggallahir,
      jeniskelamin: jeniskelamin,
      nomorhp: nomorhp,
      alamat: alamat,
    
  };

  putData(urlPUT, data, AmbilResponse);
};

const updateButton = document.getElementById("updateButton");

updateButton.addEventListener("click", () => {
  console.log("button aktif");
  pushData(); // Call pushData function when the button is clicked
});