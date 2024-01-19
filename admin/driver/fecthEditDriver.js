import { isiData } from "https://cdn.jsdelivr.net/gh/HealHeroo/jshealhero@0.3.5/admin/driver/editDriver.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlFetch } from "../driver/urlEditDriver.js";

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
